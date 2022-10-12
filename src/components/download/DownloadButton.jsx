import * as React from 'react';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import axios from 'axios'
import fileDownload from 'js-file-download'



export default function DownloadButton() {

  const downloadFile = async () => {
    axios.get('https://docs.google.com/spreadsheets/d/1u5rA_6vMs9w0G_MBNycjOemnJyv5parw/edit#gid=693768882', {
      responseType: 'blob',
    })
      .then((res) => {
        fileDownload(res.data, "SmartHdata.xlsx")
      })
    const url = URL.createObjectURL(new Blob('https://docs.google.com/spreadsheets/d/1u5rA_6vMs9w0G_MBNycjOemnJyv5parw/edit#gid=693768882'));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', "outputFilename");
    document.body.appendChild(link);
    link.click();

  }
  return (
    <>
      <div style={{ width: "80%", marginLeft: "75%", marginTop: "10%" }}>
        <Stack direction="row" spacing={2}>
          <Button startIcon={<DownloadIcon />} sx={{ color: "#4D4D4D" }} onClick={() => downloadFile()}>
            Download
          </Button>

        </Stack>
      </div>

    </>
  );
}
