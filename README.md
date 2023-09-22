# angular-wsp
Angular Training for WSP (11-22 Sept 2023: 2:30pm-6:30pm)

FEEDBACK Link: https://forms.office.com/r/VxRzZ21eVJ


/* HeroesComponent's private CSS styles */
.employees {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  
  .employees li {
    display: flex;
  }
  
  .employees button {
    flex: 1;
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: 0;
    border-radius: 4px;
    display: flex;
    align-items: stretch;
    height: 1.8em;
  }
  
  .employees button:hover {
    color: #2c3a41;
    background-color: #e6e6e6;
    left: .1em;
  }
  
  .employees button:active {
    background-color: #525252;
    color: #fafafa;
  }
  
  .employees button.selected {
    background-color: black;
    color: white;
  }
  
  .employees button.selected:hover {
    background-color: #505050;
    color: white;
  }
  
  .employees button.selected:active {
    background-color: black;
    color: white;
  }
  
  .employees .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #405061;
    line-height: 1em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
  
  .employees .name {
    align-self: center;
  }
