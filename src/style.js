
const icon = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="15px" height="17px" viewBox="0 0 15 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 43 (38999) - http://www.bohemiancoding.com/sketch -->
    <title>Calendar</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="TP-test-form" transform="translate(-505.000000, -287.000000)" fill="#4990E2">
            <g id="Wide-form" transform="translate(50.000000, 200.000000)">
                <g id="Input2" transform="translate(260.000000, 75.000000)">
                    <path d="M197,19.9977418 C197,19.9977418 197.001596,27.2488688 197,27 L208.002502,26.9989014 C208.000907,26.9989014 207.997314,19.9994507 207.997314,19.9994507 L197,19.9977418 L197,19.9977418 L197,19.9977418 Z M203,23 L207,23 L207,26 L203,26 L203,23 L203,23 L203,23 Z M210,18 L210,27 C210,28.105 209.105,29 208,29 L197,29 C195.895,29 195,28.105 195,27 L195,18 L210,18 L210,18 L210,18 Z M207,13.9994999 L207,13.0002501 C207,12.448112 206.552,12 206,12 L205,12 C204.448,12 204,12.448112 204,13.0002501 L204,13.9994999 L201,13.9994999 L201,13.0002501 C201,12.448112 200.552,12 200,12 L199,12 C198.448,12 198,12.448112 198,13.0002501 L198,13.9994999 L197,13.9994999 C195.895,13.9994999 195,14.8947237 195,16 L210,16 C210,14.8947237 209.105,13.9994999 208,13.9994999 L207,13.9994999 L207,13.9994999 L207,13.9994999 Z" id="Calendar"></path>
                </g>
            </g>
        </g>
    </g>
</svg>`

export const styles = `body {
  margin: 0;
  padding: 0;
}

#widget {
  display: inline-flex;
  flex-direction: column;
  background-color: #468ee5;
  padding: 5px 20px 15px 20px;
  box-sizing: border-box;
  min-width: 200px;
  max-width: 1024px;
  width: 100%;
}

#dateHolder {
  height: min-content;
  width: fit-content;
  display: flex;
  gap: 20px;
  align-items: end;
  flex-wrap: wrap;
}
.inputHolder{
  width: 201px;

}
input {
  position: relative;
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 2px;
  border: 0;
  font-family: "Open Sans", sans-serif;
  padding: 11px 11px 14px 14px;
  font-size: 14px;
    color: #898989
}
input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0;
}
.inputHolder{
  position:relative
}
.inputHolder::after {
  content: '';
  position: absolute;
  inset-block-start: 50%;
  transform: translateY(-50%);
  right: 10px;
  height: 18px;
  width: 15px;
  pointer-events: none;
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTVweCIgaGVpZ2h0PSIxN3B4IiB2aWV3Qm94PSIwIDAgMTUgMTciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzICgzODk5OSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Q2FsZW5kYXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iVFAtdGVzdC1mb3JtIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTA1LjAwMDAwMCwgLTI4Ny4wMDAwMDApIiBmaWxsPSIjNDk5MEUyIj4KICAgICAgICAgICAgPGcgaWQ9IldpZGUtZm9ybSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAuMDAwMDAwLCAyMDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iSW5wdXQyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNjAuMDAwMDAwLCA3NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTk3LDE5Ljk5Nzc0MTggQzE5NywxOS45OTc3NDE4IDE5Ny4wMDE1OTYsMjcuMjQ4ODY4OCAxOTcsMjcgTDIwOC4wMDI1MDIsMjYuOTk4OTAxNCBDMjA4LjAwMDkwNywyNi45OTg5MDE0IDIwNy45OTczMTQsMTkuOTk5NDUwNyAyMDcuOTk3MzE0LDE5Ljk5OTQ1MDcgTDE5NywxOS45OTc3NDE4IEwxOTcsMTkuOTk3NzQxOCBMMTk3LDE5Ljk5Nzc0MTggWiBNMjAzLDIzIEwyMDcsMjMgTDIwNywyNiBMMjAzLDI2IEwyMDMsMjMgTDIwMywyMyBMMjAzLDIzIFogTTIxMCwxOCBMMjEwLDI3IEMyMTAsMjguMTA1IDIwOS4xMDUsMjkgMjA4LDI5IEwxOTcsMjkgQzE5NS44OTUsMjkgMTk1LDI4LjEwNSAxOTUsMjcgTDE5NSwxOCBMMjEwLDE4IEwyMTAsMTggTDIxMCwxOCBaIE0yMDcsMTMuOTk5NDk5OSBMMjA3LDEzLjAwMDI1MDEgQzIwNywxMi40NDgxMTIgMjA2LjU1MiwxMiAyMDYsMTIgTDIwNSwxMiBDMjA0LjQ0OCwxMiAyMDQsMTIuNDQ4MTEyIDIwNCwxMy4wMDAyNTAxIEwyMDQsMTMuOTk5NDk5OSBMMjAxLDEzLjk5OTQ5OTkgTDIwMSwxMy4wMDAyNTAxIEMyMDEsMTIuNDQ4MTEyIDIwMC41NTIsMTIgMjAwLDEyIEwxOTksMTIgQzE5OC40NDgsMTIgMTk4LDEyLjQ0ODExMiAxOTgsMTMuMDAwMjUwMSBMMTk4LDEzLjk5OTQ5OTkgTDE5NywxMy45OTk0OTk5IEMxOTUuODk1LDEzLjk5OTQ5OTkgMTk1LDE0Ljg5NDcyMzcgMTk1LDE2IEwyMTAsMTYgQzIxMCwxNC44OTQ3MjM3IDIwOS4xMDUsMTMuOTk5NDk5OSAyMDgsMTMuOTk5NDk5OSBMMjA3LDEzLjk5OTQ5OTkgTDIwNywxMy45OTk0OTk5IEwyMDcsMTMuOTk5NDk5OSBaIiBpZD0iQ2FsZW5kYXIiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+');
  background-repeat: no-repeat;
  }
.btn {
  background-color: #f7a700;
  height: 40px;
  box-sizing: border-box;
  border: none;
  border-radius: 2px;
  padding: 9px 80px 13px 80px;
  font-size: 20px;
  color: white;
  cursor: pointer;
}

.header,
.desc {
  color: white;
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
}

.contentHolder {
  display: inline-flex;
  gap: 15px;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: space-between;
  margin-top: 15px;
}

.desc {
  font-size: 10px;
  width: 242px;
}

@media (max-width: 990px) {
  .desc {
    width: 100%;
  }
  .inputHolder{
    width: 220px;
  }
}

@media (max-width: 769px) {
  .block {
    flex: 1 0 201px;
    box-sizing: border-box;
  }

  .block:nth-child(-n+2) {
    order: 0;
  }

  button {
    flex: 1 0 240px;
  }

  
  #dateHolder {
    flex-wrap: wrap;
  }

  .block:nth-child(3) {
    flex: 1 0 100%;
  }
}

@media (max-width: 462px) {
  .header {
    font-size: 18px;
  }

  .block {
    flex: 1 0 110px;
  }
    
  .contentHolder {
    flex-wrap: wrap;
  }
}

@media (max-width: 340px) {
  #widget {
    padding: 5px 10px 15px 10px;
  }
  .block{
  flex: unset;
  }
  .inputHolder,
  .btn {
    width: 100%;
  }

  .desc {
    width: 100%;
    order: 2
  }

  #dateHolder {
    gap: 10px;
    order:1 ;
  }

  .btn {
    padding: 9px 20px 13px 20px;
  }
}`
