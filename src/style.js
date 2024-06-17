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

input {
  position: relative;
  height: 40px;
  width: 201px;
  box-sizing: border-box;
  border-radius: 2px;
  border: 0;
  color: transparent;
  font-family: "Open Sans", sans-serif;
  padding: 11px 11px 14px 14px;
}
input:focus{
  color: #898989
}


input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0;
}

input::after {
  position: absolute;
  content: url(./calendar.svg);
  inset-block-start: 50%;
  transform: translateY(-50%);
  right: 10px;
  pointer-events: none;

}
#departDate:before, #returnDate:before {
  position: absolute;
  top: 13px;
  content: "Depart date";
  color: grey;
  text-align: left;
  font-size: 14px;

}
#returnDate:before{

  content: "Return date";

}
#returnDate:focus:before, #departDate:focus:before{
  content: ''
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

  .contentHolder {
    flex-wrap: wrap;
  }

  #dateHolder {
    flex-wrap: wrap;
  }

  .block:nth-child(3) {
    flex: 1 0 100%;
  }
}

@media (max-width: 440px) {
  .header {
    font-size: 18px;
  }

  .block {
    flex: 1 0 110px;
  }
}

@media (max-width: 287px) {
  #widget {
    padding: 5px 10px 15px 10px;
  }
  .block{
  flex: unset;
  }
  input,
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
