/**
 * Created by Christian on 12.12.2017.
 */
import React, {Component, PropTypes} from 'react';

// download html2canvas and jsPDF and save the files in app/ext, or somewhere else
// the built versions are directly consumable
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ActuatorTechnology_Page from "./ActuatorTechnology_Page";

export default class Print extends Component {
    constructor(props) {
        super(props);
    }

    printDocument() {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                // pdf.output('dataurlnewwindow');
                pdf.save("download.pdf");
            })
        ;
    }

    render() {
        return (<div>
            <div className="mb5">
                <button onClick={this.printDocument}>Print</button>
            </div>
            <div id="divToPrint" className="mt4">
                <div>Note: Here the dimensions of div are same as A4</div>
                <div>You Can add any component here</div>
                <ActuatorTechnology_Page/>
            </div>
        </div>);
    }
}