import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = () => ({
    content: {
        display: "inline-block",
        marginLeft: "auto",
        marginRight: "auto"
    }
})

const Resume = () => {
    const classes = useStyles();

    return <Paper
        elevation={0}
    >
        <div className="content" style={classes.content}>
            <Document file={process.env.PUBLIC_URL + "/static/documents/Resume-2020.pdf"}>
                <Page height={1200} pageNumber={1}></Page>
            </Document>
        </div>
    </Paper >
}

export default Resume;