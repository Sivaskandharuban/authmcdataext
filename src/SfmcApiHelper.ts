
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
  <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>

<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.0/axios.min.js" 
  integrity="sha512-DZqqY3PiOvTP9HkjIWgjO6ouCbq+dxqWoJZ/Q+zPYNHmlnI2dQnbJ5bxAHpAMw+LXRm4D72EIRXzvcHQtE8/VQ==" 
  crossorigin="anonymous">
  </script>

 

<!-- Icon -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="/css/hearsay.css" />

</head>
  <body>
    <div  class='row'>
      <div class='col-md-2'></div>
      <div class='col-md-8' id="mydiv"></div>
      <div class='col-md-2'></div>
    </div>

    <script type="text/babel">
	
        function AddLogorow(abcd, second){
          return (
                <div class="e1logorowpadding">
                    <div><img src='https://github.com/Sivaskandharuban/authmcdataext/blob/master/views/hearsay.png?raw=true' width='50' height='50' /><label class='e1pageheader'>Hearsay Systems - Organization Preferences</label></div>
                </div>);
        }

        function AddTextLabels(){
            return (
                <span class="checkmark">
                    <div class="checkmark_circle"></div>
                    <div class="checkmark_stem"></div>
                    <div class="checkmark_kick"></div>
                </span>
            );
        }
		function CheckDropDownItemExist(itemname,sel1,sel2,sel3,sel4,sel5,sel6,sel7){
			if(sel1 != itemname && sel2 != itemname && sel3 != itemname && sel4 != itemname &&
			sel5 != itemname && sel6 != itemname && sel7 != itemname){
				//OK Good to go
			}
			else{
				itemname='';
			}
			return itemname;
		}
		function GetSelectItemName(){
			return '--Select--';
		}
		
		function GetDropdownListItemsNEW(sel1,sel2,sel3,sel4,sel5,sel6,sel7){
		    let arrtemp=[];
			arrtemp.push(GetSelectItemName());
		
			let itemelement=CheckDropDownItemExist('Birth Date',sel1,sel2,sel3,sel4,sel5,sel6,sel7);
			if(itemelement.length >0){arrtemp.push(itemelement);}
			
     		itemelement=CheckDropDownItemExist('Email',sel1,sel2,sel3,sel4,sel5,sel6,sel7);
			if(itemelement.length >0){arrtemp.push(itemelement);}
			
     		itemelement=CheckDropDownItemExist('First Name',sel1,sel2,sel3,sel4,sel5,sel6,sel7);
			if(itemelement.length >0){arrtemp.push(itemelement);}			

     		itemelement=CheckDropDownItemExist('Last Name',sel1,sel2,sel3,sel4,sel5,sel6,sel7);
			if(itemelement.length >0){arrtemp.push(itemelement);}			
			
			itemelement=CheckDropDownItemExist('Phone',sel1,sel2,sel3,sel4,sel5,sel6,sel7);
			if(itemelement.length >0){arrtemp.push(itemelement);}	
			
			itemelement=CheckDropDownItemExist('Preferred Name',sel1,sel2,sel3,sel4,sel5,sel6,sel7);
			if(itemelement.length >0){arrtemp.push(itemelement);}				

			itemelement=CheckDropDownItemExist('Title',sel1,sel2,sel3,sel4,sel5,sel6,sel7);
			if(itemelement.length >0){arrtemp.push(itemelement);}							
			return arrtemp;
		}
        function SecondPageHeader(){
            return (
                <div class="row epaddingbottom10">
                    <div class="col-md-11 elRowPg1">
                        <label class='e1labelheaderPage1'>Create Data Template</label>
                    </div>
                    <div class="col-md-1"></div>
                </div>

            );
        }

        function checkAndAddCustomOption(customUniqueoption){
          if(customUniqueoption!="" && customUniqueoption!=" " && customUniqueoption!=null){
            return (
              <option value="customUniqueoption">{customUniqueoption}</option>
            ) 
          } else{
            return (
              ""
            ) 
          }
          
        }

		
		function MakeItem(X) {
			return <option value={X}>{X}</option>;
		};
			

        function SecondPageDropdownControl(controlname,controlvalue,handler, customoption,arraylist){
           if(controlname=="blank"){
                return "";
            }
            else if(controlname=="temp1")
            {
              
              return (
                <select disabled name={controlname} value={controlvalue} onChange={handler} class='e1inputdd col-md-11'>
                  <option value={customoption}>{customoption}</option>
                </select>
              );
            }
            else
            {
              return (
                <select name={controlname} value={controlvalue} onChange={handler} class='e1inputdd col-md-11'>
                  {arraylist.map(MakeItem)}
                </select>
              );
            }

        }
		


        function SecondPageTemplateNameControl(controlname,controlvalue,handler){
            return (
                <input class='e1inputpg2' placeholder='Enter Template name'  name={controlname} value={controlvalue} onChange={handler} type="text" maxlength="30" />
            );
        }

        function AddPage2Row(control1name, control1value, handler, label1name,ddl1array, rowpos,label2name,control2name,control2value, customuniqueid,ddl2array){

        let sPageHeader="";
        let scontrol1 = "";
        let scontrol2 = "";
        if(rowpos==1){
            sPageHeader=SecondPageHeader();
            scontrol1 = SecondPageTemplateNameControl(control1name,control1value,handler);
        }
        else
        {
            scontrol1 = SecondPageDropdownControl(control1name,control1value,handler, customuniqueid,ddl1array);
        }

        scontrol2=SecondPageDropdownControl(control2name,control2value,handler, customuniqueid,ddl2array);
        return (
            <div>
                {sPageHeader}
                <div class="row epaddingbottom10 e1marginleft">
                    <div class="col-md-1 ">
                        <label class='e1labelheaderPage2'>{label1name}</label>
                    </div>
                    <div class="col-md-4 ">
                        {scontrol1}
                    </div>
                    <div class="col-md-1 ">
                        <label class='e1labelheaderPage2'>{label2name}</label>
                    </div>
                    <div class="col-md-4 ">
                        {scontrol2}
                    </div>
                </div>
            </div>
            )
        }

        function AddBackButton(page, btnclick, btnclass){
          if(page>1){
            return (
                <button onClick={btnclick} class={btnclass}>Back</button>
            );
          } else{
            return (
                ""
            );
          }
        }


        function AddButtonBlock(cancelclick, nextclick, nextbtntext,btnclass,backclick, pageno){
          return (
            <div class='e1container'>
                <div  class='row'>
                    <div class='col-md-2 pull-left'><button onClick={cancelclick} class='btn btn-link e1cancelbuton float-left'>Cancel</button></div>
                    <div class='col-md-7' id="mydiv"></div>
                    <div class='col-md-3'>
                        <button onClick={nextclick} class={btnclass}>{nextbtntext}</button>
                        {AddBackButton(pageno, backclick, btnclass)}
                    </div>
                </div>
            </div>
          );
        }

		
		


        function AddCustomFieldBlock(fieldLabelControlName, typeControllnName, lengthControlName, btnName, 
                fieldLabelControlValue, typeControlValue, lengthControlValue, handler , 
				FieldObjectHandler , divcssclass, noOfField, leninputdisabled, buttonlabel){
          return (

        <div class={divcssclass}>
            <div class="col-md-1">
                <label class="e1labelheaderPage1">{noOfField}</label>
            </div>
            <div class="col-md-1">
                <label class="e1labelheaderPage1">Field</label>
            </div>
            <div class="col-md-3">
                <input class='e1input3' name={fieldLabelControlName} value={fieldLabelControlValue} onChange={handler} type="text" maxlength="30" />
            </div>
            <div class="col-md-1">
                <label class="e1labelheaderPage1">Type</label>
            </div>
            <div class="col-md-2">
                <select class="e1inputddsmall" name={typeControllnName} value={typeControlValue} onChange={handler}>
                    <option value="0" selected>--Select--</option>
                    <option value="1">Boolean</option>
                    <option value="2">Date</option>
                    <option value="3">Decimal</option>
                    <option value="4">Email Address</option>
                    <option value="5">Locale</option>
                    <option value="6">Number</option>
                    <option value="7">Phone</option>
                    <option value="8">Text</option>
                </select>
            </div>
            <div class="col-md-1">
                <label class="e1labelheaderPage1 emarginleft10">Size</label>
            </div>
            <div class="col-md-2">
                <input class="e1input120" name={lengthControlName} value={lengthControlValue} type="text" onChange={handler} maxlength="5"/>
            </div>
            <div class="col-md-1">
                <button name={btnName} onClick={FieldObjectHandler} class="btn btn-primary btn-xs e1buttonleftpadding " style={{"margin-top":"1px"}}>{buttonlabel}</button>
            </div>


        </div>
          )
        }
        

        function AddDigitInCircle(number){
		let cssclass='Roundedbadge';
		if(number==10){cssclass='Roundedbadge10'}
		
        return (
          <span class={cssclass} aria-hidden="true">{number}</span>
        );
      }

        function getmarginWidth(step){
          let margin="56%";
          if(step==1){
            margin="46%";
          } else if(step==2){
            margin="46%";
          } else if(step==3){
            margin="45%";
          }
          return margin;
        }


        function GetIcon(){
          return(
            
            <i class="fa fa-check-circle" aria-hidden="true"></i>
          );
        }

        function getDigitIcon(){
          return (
            <span class="badge">2</span>
          );
        }
        function AsignDigitIcon(stepno, Status){
          const mystyle = {
            fontSize:15,
            fontWeight: "700",
            strokeWidth: 0
          };
          if(Status==false){
            return (
              <svg width="100" height="100">
                  <circle cx="30" cy="24" r="6" stroke-width="4" fill="#fff" />
                  <text x="30%" y="26%" dominant-baseline="middle"  text-anchor="middle" style={mystyle} class="polygonStyleUnselected">{stepno}</text>
              </svg>
            )
          } else{
            return (
              ""
            )
          }
        }

        function getWidthSize(stepno){
          if(stepno==1){
            return "240"
          } 
          else if(stepno==2){
            return "220";
          } else if(stepno==3){
            return "200";
          }
        }

        function getSvgSize(stepno){
          if(stepno==1){
            return "202.5,25 182.5,51 0,51 0,25 0,0 182.5,0";
            //return "240,25 220,51 37.5,51 37.5,25 37.5,0 220,0";
            //return "240,25 220,51 18.5,51 37.5,25 18.5,0 220,0";
          } else if(stepno==2){
            return "185.5,25 162.5,51 0,51 19,25 0,0 162.5,0";
            //return "220,25 200,51 18.5,51 37.5,25 18.5,0 200,0";
          } else if(stepno==3){
            return "185.5,25 162.5,51 0,51 19,25 0,0 162.5,0";
            //return "200,25 180,51 18.5,51 37.5,25 18.5,0 180,0";
          }
        }

        function GetIconSize(stepno){
          if(stepno==1){
            return "20"
          } 
          else if(stepno==2){
            return "34";
          } else if(stepno==3){
            return "34";
          }
        }


        function GetWizardStep(labelname, stepno, Status, onClickHandler){
          let marginLeft=getmarginWidth(stepno);
          let SelectionClass=(Status==true)?"polygonStyleSelected":"polygonStyleUnselected";
          let pointerClass=(Status==true)?"clsLink":"clsUnlink";
          let svgPoints=getSvgSize(stepno)
          let TotalWidth=getWidthSize(stepno);
          let RoundedIconWidth=GetIconSize(stepno);
          let RoundedIconWidthForText=RoundedIconWidth+"%";
          let className="svgStyles "+"Div"+stepno + " " + pointerClass;
          const mystyle = {
            // fontSize:15,
            fontWeight: "700",
            strokeWidth: 0,
          };

          if(Status==true){
            return(
              <svg name={stepno} height="75" width={TotalWidth} class={className} onClick={onClickHandler}>
                <polygon points={svgPoints} class={SelectionClass}  />
                <svg width="100" height="100">
                    <text x={RoundedIconWidthForText} y="25%" dominant-baseline="middle"  text-anchor="middle"  class="iconStyle"> &#xf05d; </text>
                </svg>
                
                <text x={marginLeft} y="34%" dominant-baseline="middle" text-anchor="middle" class="wizardTextStyle">   {labelname}</text>
              </svg>
            )
          } else{
            return(
              <svg name={stepno}  height="75" width={TotalWidth} class={className} onClick={onClickHandler}>
                <polygon points={svgPoints} class={SelectionClass}  />
                <svg width="100" height="100">
                    <circle cx={RoundedIconWidth} cy="24" r="6" stroke-width="4" fill="#fff" />
                    <text x={RoundedIconWidthForText} y="26%" dominant-baseline="middle"  text-anchor="middle" style={mystyle} class="polygonStyleUnselected">{stepno}</text>
                </svg>
                <g><text class="badge">CLICK ME</text></g>
                <text x={marginLeft} y="34%" dominant-baseline="middle" text-anchor="middle" class="wizardTextStyle"> {labelname}</text>
            </svg>
            )
          }
        }

        function wizardNavigationNew(step, onchangeHandler){
          //onclick={onClickHandler(stepno)}

          if(step==1){
            return (
            <div class="wizard">
              {GetWizardStep("ORG. PREFERENCES", 1, false, onchangeHandler)}
              {GetWizardStep("DATA CONFIG", 2, false, onchangeHandler)}
              {GetWizardStep("SUMMARY", 3, false, onchangeHandler)}
            </div>
            );
          } else if(step==2){
            return (
            <div class="wizard">
              
              {GetWizardStep("ORG. PREFERENCES", 1, true, onchangeHandler)}
              {GetWizardStep("DATA CONFIG", 2, false, onchangeHandler)}
              {GetWizardStep("SUMMARY", 3, false, onchangeHandler)}
            </div>
            );
          }else if(step==3){
            return (
            <div class="wizard">
              
              {GetWizardStep("ORG. PREFERENCES", 1, true, onchangeHandler)}
              {GetWizardStep("DATA CONFIG", 2, true, onchangeHandler)}
              {GetWizardStep("SUMMARY", 3, false, onchangeHandler)}
            </div>
            );
          }
          
        }
		
		function getCategoryIDforApp(){
		console.log("getCategoryIDforApp function called");
	
	axios({
			          method: 'GET',
			          url: 'https://dataintapicall.herokuapp.com/getcategoryidforapp',
			           //data: jsonObject,
			          //headers: {'Content-Type': 'application/json' }
                })
                  .then(function (response) {
                  //handle success
                  //return response;	
					console.log(response.data);	
					//loaddata(jsonObject);				
                  });
		
		}
		
		function loaddata(jsonObject){
	console.log("load data function called");
	
	axios({
			          method: 'POST',
			          url: 'https://dataintapicall.herokuapp.com/loaddataforapp',
			           data: jsonObject,
			          headers: {'Content-Type': 'application/json' }
                })
                  .then(function (response) {
                  //handle success
                  //return response;	
					console.log(response.data);							  
                  });
	}
	
	
	function loaddataforpage2(template, dynamicTemplate){	
	
	console.log("load data for page 2 function called");
	
	
	axios({
			          method: 'POST',
			          url: 'https://dataintapicall.herokuapp.com/loaddatafortempapp',
			           data: template,
			          headers: {'Content-Type': 'application/json' }
                })
                  .then(function (response) {
					console.log(response.data);
					createDE(dynamicTemplate);
                  });
	}
	
	function createDE(dynamicTemplate){
		console.log("createDE function called "+ dynamicTemplate);
		
axios({
			          method: 'POST',
			          url: 'https://dataintapicall.herokuapp.com/createdeforapp',
					  data: dynamicTemplate,
					  headers: {'Content-Type': 'application/json' }
                })
                  .then(function (response) {		  
					console.log("Data extension created dynamically");
                  })
				  .catch(function (error) {
					console.log(error);
					});
	}

     class HearsayPage1 extends React.Component {
        constructor(props) {
          super(props);
		  
		  
		  
          this.state = {
            orgid: '',
            refid: 0,
            customeruniqueid:'',
            reftext: "First",
            page:1,
            templatename: '',
            temp1: GetSelectItemName(),
            temp2: GetSelectItemName(),
            temp3: GetSelectItemName(),
            temp4: GetSelectItemName(),
            temp5: GetSelectItemName(),
            temp6: GetSelectItemName(),
            temp7: GetSelectItemName(),
            temp8: '',
            temp9: '',
            temp10: '',

            temp1text: '',
            temp2text: '',
            temp3text: '',
            temp4text: '',            
            temp5text: '',            
            temp6text: '',            
            temp7text: '',            
            temp8text: '',            
            temp9text: '',            
            temp10text: '',            

            temp1label: AddTextLabels(),
            temp2label: AddDigitInCircle('2'),
            temp3label: AddDigitInCircle('3'),
            temp4label: AddDigitInCircle('4'),
            temp5label: AddDigitInCircle('5'),
            temp6label: AddDigitInCircle('6'),
            temp7label: AddDigitInCircle('7'),
            temp8label: AddDigitInCircle('8'),
            temp9label: AddDigitInCircle('9'),
            temp10label: AddDigitInCircle('10'),
            
            FieldCounter:7,

            Field8Css:"row epaddingbottom10 ehidediv e1marginleft emargintop10",
            Field9Css:"row epaddingbottom10 ehidediv e1marginleft",
            Field10Css:"row epaddingbottom10 ehidediv e1marginleft",

            artemp8:[],
            artemp9:[],
            artemp10:[],

            temp8FieldLabel:"",
            temp9FieldLabel:"",
            temp10FieldLabel:"",
			
            temp8ButtonLabel:"Save",
            temp9ButtonLabel:"Save",
            temp10ButtonLabel:"Save",			

            temp8DataType:"",
            temp9DataType:"",
            temp10DataType:"",

            temp8Length:"",
            temp9Length:"",
            temp10Length:"",
			
			
			LenthFld8CSS:" true ",
            LenthFld9CSS:" true ",
            LenthFld10CSS:" true ",
			
			ArrayList1:GetDropdownListItemsNEW('','','','','','',''),
			ArrayList2:GetDropdownListItemsNEW('','','','','','',''),
			ArrayList3:GetDropdownListItemsNEW('','','','','','',''),
			ArrayList4:GetDropdownListItemsNEW('','','','','','',''),
			ArrayList5:GetDropdownListItemsNEW('','','','','','',''),
			ArrayList6:GetDropdownListItemsNEW('','','','','','',''),
			ArrayList7:GetDropdownListItemsNEW('','','','','','',''),
		
            };

            
          this.handleChangeBack = this.handleChangeBack.bind(this);  
          this.handleChangeNext = this.handleChangeNext.bind(this);
          this.handleChangeCancel = this.handleChangeCancel.bind(this);
          this.handleNewFieldClick = this.handleNewFieldClick.bind(this);
		  
      this.RefreshOtherDropDownLists = this.RefreshOtherDropDownLists.bind(this);
      this.redirectFromWizardSteps=this.redirectFromWizardSteps.bind(this);
		  
        }

        

        handleNewFieldClick(event){
          const counter=this.state.FieldCounter+1;
          if(counter>10){
            alert('Maximum limit exceeded (limit: 10)')            
          }
          else{
              let stemp2='row epaddingbottom10 e1marginleft';
              if(counter==8){
			    stemp2='row epaddingbottom10 e1marginleft emargintop10';
			  
                this.setState({Field8Css: stemp2});
              }                   
              else if(counter==9){
                this.setState({Field9Css: stemp2});
              }                                                   
              else if(counter==10){
                this.setState({Field10Css: stemp2});
              }                              
              this.setState({FieldCounter: counter});
              }
        }

        handleChangeCancel(event) {
          alert('Cancel button clicked');
        }



        



        handleChangeBack(event){
          let ipage = this.state.page - 1;
		  if(ipage<=0){ipage=1;}
          this.setState({page: ipage});
        }

        handleChangeNext(event) {
          
          if(this.state.page==3){

            //Clear Dropdown
            this.setState({ArrayList1: GetDropdownListItemsNEW()});
            this.setState({ArrayList2: GetDropdownListItemsNEW()});
            this.setState({ArrayList3: GetDropdownListItemsNEW()});
            this.setState({ArrayList4: GetDropdownListItemsNEW()});
            this.setState({ArrayList5: GetDropdownListItemsNEW()});
            this.setState({ArrayList6: GetDropdownListItemsNEW()});
            this.setState({ArrayList7: GetDropdownListItemsNEW()});
			
			}
			
			if(this.state.page==3){
			
			let template=[
	    
	    {
            keys: {
                    Template_Name : this.state.templatename,
                },
		    values: {
					Hearsay_Org_ID : this.state.orgid,
					Hearsay_User_Reference_ID : this.state.refid,
					Customer_Unique_ID : this.state.customeruniqueid,
					Customer_Name : "Customer Name",
              		option_1:this.state.temp2text,
              		option_2:this.state.temp3text,
              		option_3:this.state.temp4text,
					option_4:this.state.temp5text,
					option_5:this.state.temp6text,
					option_6:this.state.temp7text,
					option_7:this.state.temp8FieldLabel,
             		option_8:this.state.temp9FieldLabel,
              		option_9:this.state.temp10FieldLabel,
            		}
	    	}
	    ];
		
		let dynamicTemplate=
	    
	    {
                    Template_Name : this.state.templatename,
					Hearsay_Org_ID : this.state.orgid,
					Hearsay_User_Reference_ID : this.state.refid,
					Customer_Unique_ID : this.state.customeruniqueid,
					Customer_Name : "Customer Name",
              		option_1:this.state.temp2text,
              		option_2:this.state.temp3text,
              		option_3:this.state.temp4text,
					option_4:this.state.temp5text,
					option_5:this.state.temp6text,
					option_6:this.state.temp7text,
					option_7:this.state.temp8FieldLabel,
             		option_8:this.state.temp9FieldLabel,
              		option_9:this.state.temp10FieldLabel,
            		
	    	}
			console.log("Template Name :" + JSON.stringify(template));		
		loaddataforpage2(template, dynamicTemplate);
	    }
	    
	    
             
	      if(this.state.page==1){
	      let jsonObject = [
                {
                    keys: {
                        Hearsay_Org_ID : this.state.orgid,
                    },
                    values: {
                        Hearsay_User_Reference_ID : this.state.refid,
						Customer_Unique_ID : this.state.customeruniqueid,
						
                    }
                }                   
            ];            
	    
	    console.log("Before axios");	    
	    axios({
			          method: 'POST',
			          url: 'https://dataintapicall.herokuapp.com/appdemoauthtoken', 
			          
			          //headers: {'Content-Type': 'application/json' }
                })
                  .then(function (response) {		  
					var responseData = response.data;
					//getCategoryIDforApp(jsonObject);
					loaddata(jsonObject);
					//console.log("Before createDE function ");					
					console.log("authentication token obtained and row has been created");
		  
                  })
				  .catch(function (error) {
					console.log(error);
					});
		  }
		  if(this.state.page==2){
		  getCategoryIDforApp();
		  }

            
             
          

          //Validation
           
          var ValidationStatus=true;
          var validateMessages=[];

          if(this.state.page==1){
		  
		  
            if(this.state.orgid=="" || this.state.orgid==null || this.state.orgid==" "){
            ValidationStatus=false;
                ReactDOM.render(<p style={{color: "red" }}>Hearsay Org ID is mandatory.</p>, document.getElementById('valMsgOrgId'));
            } else{
                ReactDOM.render(<p> </p>, document.getElementById('valMsgOrgId'));
            }

            if(this.state.refid==0 || this.state.refid=="0"){
              ValidationStatus=false;
              ReactDOM.render(<p style={{color: "red"}}>Reference ID is mandatory.</p>, document.getElementById('valMsgRefId'));
            } else{
              ReactDOM.render(<p></p>, document.getElementById('valMsgRefId'));
            }
            if(this.state.customeruniqueid==0 || this.state.customeruniqueid=="0"){
              ValidationStatus=false;
              ReactDOM.render(<p style={{color: "red"}}>Customer Unique ID is mandatory.</p>, document.getElementById('spncustomeruniqueid'));
            } else{
              ReactDOM.render(<p></p>, document.getElementById('spncustomeruniqueid'));
            }			

			
          } else if(this.state.page==2){


			if(this.state.templatename==""){
              ValidationStatus=false;
              ReactDOM.render(<p style={{color: "red"}}>Template name is mandatory.</p>, document.getElementById('valMsgPageTwo'));
		
			}
            
			

            if(this.state.templatename=="" && this.state.temp1text=="" && this.state.temp2text=="" && 
			    this.state.temp3text=="" && this.state.temp4text=="" && 
				this.state.temp5text=="" && this.state.temp6text=="" && this.state.temp7text==""){
              ValidationStatus=false;
              ReactDOM.render(<p style={{color: "red"}}>Data template fields are mandatory.</p>, document.getElementById('valMsgPageTwo'));
				
				}
            }

          if(ValidationStatus==true){

            
            let ipage = this.state.page + 1;
            if(ipage==4){
              //reset to first page
              ipage=1;
              //reset all values
              this.setState({orgid: ''});
              this.setState({refid: 1});
              this.setState({reftext: 'First'});
			  
			  this.setState({templatename: ''});
			  this.setState({customeruniqueid: ''});
			  
              this.setState({temp1: GetSelectItemName()});
              this.setState({temp2: GetSelectItemName()});
              this.setState({temp3: GetSelectItemName()});
              this.setState({temp4: GetSelectItemName()});
              this.setState({temp5: GetSelectItemName()});
              this.setState({temp6: GetSelectItemName()});
              this.setState({temp7: GetSelectItemName()});
              this.setState({temp8: '1'});
              this.setState({temp9: '1'});
              this.setState({temp10: '1'});

              this.setState({temp1text: ''});
              this.setState({temp2text: ''});
              this.setState({temp3text: ''});
              this.setState({temp4text: ''});

              this.setState({temp5text: ''});
              this.setState({temp6text: ''});
              this.setState({temp7text: ''});
              this.setState({temp8text: ''});
              this.setState({temp9text: ''});
              this.setState({temp10text: ''});


              this.setState({FieldContent5: ''});
              this.setState({FieldContent6: ''});
              this.setState({FieldContent7: ''});
              this.setState({FieldContent8: ''});
              this.setState({FieldContent9: ''});
              this.setState({FieldContent10: ''});

              this.setState({FieldCounter: 4});

              this.setState({artemp8: []});
              this.setState({artemp9: []});
              this.setState({artemp10: []});
              this.setState({temp8FieldLabel: ''});
              this.setState({temp9FieldLabel: ''});
              this.setState({temp10FieldLabel: ''});
			  
              this.setState({temp8DataType: ''});
              this.setState({temp9DataType: ''});
              this.setState({temp10DataType: ''});
			  
              this.setState({temp8Length: ''});
              this.setState({temp9Length: ''});
              this.setState({temp10Length: ''});
			  
			  
			  this.setState({temp8ButtonLabel: 'Save'});
              this.setState({temp9ButtonLabel: 'Save'});
              this.setState({temp10ButtonLabel: 'Save'});
			  
			  this.setState({LenthFld8CSS: ' true '});
			  this.setState({LenthFld9CSS: ' true '});
			  this.setState({LenthFld10CSS: ' true '});

              this.setState({temp1label: AddDigitInCircle('1')});
              this.setState({temp2label: AddDigitInCircle('2')});
              this.setState({temp3label: AddDigitInCircle('3')});
              this.setState({temp4label: AddDigitInCircle('4')});
              this.setState({temp5label: AddDigitInCircle('5')});
              this.setState({temp6label: AddDigitInCircle('6')});
              this.setState({temp7label: AddDigitInCircle('7')});

				this.setState({Field8Css: 'row epaddingbottom10 ehidediv e1marginleft emargintop10'});
				this.setState({Field9Css: 'row epaddingbottom10 ehidediv e1marginleft'});
				this.setState({Field10Css: 'row epaddingbottom10 ehidediv e1marginleft'});
            }
            this.setState({page: ipage});
			
			//alert("Test");
			// this.setState({ArrayList1: GetDropdownListItemsNEW()});
			// this.setState({ArrayList2: GetDropdownListItemsNEW()});
			// this.setState({ArrayList3: GetDropdownListItemsNEW()});
			// this.setState({ArrayList4: GetDropdownListItemsNEW()});
			// this.setState({ArrayList5: GetDropdownListItemsNEW()});
			// this.setState({ArrayList6: GetDropdownListItemsNEW()});
			// this.setState({ArrayList7: GetDropdownListItemsNEW()});
          }
        }

        updateCustomFieldObject = (event) => {
          let nam = event.target.name;

         if(nam=="temp8Button"){
           debugger;
            
            //validate and update Icon
            if(this.state.temp8FieldLabel!="" &&this.state.temp8FieldLabel!=" " &&this.state.temp8DataType!=0 &&this.state.temp8DataType!="0" &&this.state.temp8Length!="" &&this.state.temp8Length!=" "){
              this.setState({temp8label:AddTextLabels()});
              var Object8={
                FieldName:this.state.temp8FieldLabel,
                FieldType:this.state.temp8DataType,
                FieldLength:this.state.temp8Length
              }
              this.setState({artemp8:Object8});
			  this.setState({temp8ButtonLabel:'Save'});
            } else{
			  this.setState({artemp8:""});
              this.setState({artemp8:""});
              this.setState({temp8ButtonLabel:'Edit'});
            }
          }else if(nam=="temp9Button"){
            
            if(this.state.temp9FieldLabel!="" &&this.state.temp9FieldLabel!="" &&this.state.temp9DataType!=0 &&this.state.temp9DataType!="0" &&this.state.temp9Length!="" &&this.state.temp9Length!=" "){
              this.setState({temp9label:AddTextLabels()});
              var Object9={
                FieldName:this.state.temp9FieldLabel,
                FieldType:this.state.temp9DataType,
                FieldLength:this.state.temp9Length
              }
              this.setState({artemp9:Object9});
    		  this.setState({temp9ButtonLabel:'Save'});
            } else{
              this.setState({artemp9:""});
              this.setState({temp9label:AddDigitInCircle("9")});
			  this.setState({temp9ButtonLabel:'Edit'});
            }
          }else if(nam=="temp10Button"){
            if(this.state.temp10FieldLabel!="" &&this.state.temp10FieldLabel!="" &&this.state.temp10DataType!=0 &&this.state.temp10DataType!="0" &&this.state.temp10Length!="" &&this.state.temp10Length!=" "){
              this.setState({temp10label:AddTextLabels()});
              var Object10={
                FieldName:this.state.temp10FieldLabel,
                FieldType:this.state.temp10DataType,
                FieldLength:this.state.temp10Length
              }
              this.setState({artemp10:Object10});
			  this.setState({temp10ButtonLabel:'Save'});
            } else{
              this.setState({artemp10:""});
              this.setState({temp10label:AddDigitInCircle("10")});
			  this.setState({temp10ButtonLabel:'Edit'});
            }
          }

          

        }


		RefreshOtherDropDownLists(pos,value) {
		  let ddl1 = this.state.temp1;
		  let ddl2 = this.state.temp2;
		  let ddl3 = this.state.temp3;
		  let ddl4 = this.state.temp4;
		  let ddl5 = this.state.temp5;
		  let ddl6 = this.state.temp6;
		  let ddl7 = this.state.temp7;
		  
//		  alert(ddl1 + ' - ' + ddl2 + ' -- ' + ddl3 + ' -- ' + ddl4 + ' -- ' + ddl5 + ' -- ' + ddl6);
		  
		  let ddlselitem =GetSelectItemName();

		   if(pos==1){
			//first dropdown selected, refresh the other dropdowns
			ddl1=value;ddl2=ddlselitem;ddl3=ddlselitem;ddl4=ddlselitem;ddl5=ddlselitem;
			ddl6=ddlselitem;ddl7=ddlselitem;
			
				//clear temp state values too
              this.setState({temp2: ddlselitem});
              this.setState({temp3: ddlselitem});
              this.setState({temp4: ddlselitem});
              this.setState({temp5: ddlselitem});
              this.setState({temp6: ddlselitem});
              this.setState({temp7: ddlselitem});
			  
				//clear label fields too  
              this.setState({temp2label: AddDigitInCircle('2')});
              this.setState({temp3label: AddDigitInCircle('3')});
              this.setState({temp4label: AddDigitInCircle('4')});
              this.setState({temp5label: AddDigitInCircle('5')});
              this.setState({temp6label: AddDigitInCircle('6')});
              this.setState({temp7label: AddDigitInCircle('7')});
			  
			  //clear array list
			this.setState({ArrayList2: GetDropdownListItemsNEW()});
			this.setState({ArrayList3: GetDropdownListItemsNEW()});
			this.setState({ArrayList4: GetDropdownListItemsNEW()});
			this.setState({ArrayList5: GetDropdownListItemsNEW()});
			this.setState({ArrayList6: GetDropdownListItemsNEW()});
			this.setState({ArrayList7: GetDropdownListItemsNEW()});
			
			
			
			this.setState({ArrayList2: GetDropdownListItemsNEW(ddl1,ddl2,ddl3,ddl4,ddl5,ddl6,ddl7)});
			this.setState({ArrayList3: GetDropdownListItemsNEW(ddl1,ddl2,ddl3,ddl4,ddl5,ddl6,ddl7)});
			this.setState({ArrayList4: GetDropdownListItemsNEW(ddl1,ddl2,ddl3,ddl4,ddl5,ddl6,ddl7)});
			this.setState({ArrayList5: GetDropdownListItemsNEW(ddl1,ddl2,ddl3,ddl4,ddl5,ddl6,ddl7)});
			this.setState({ArrayList6: GetDropdownListItemsNEW(ddl1,ddl2,ddl3,ddl4,ddl5,ddl6,ddl7)});
			this.setState({ArrayList7: GetDropdownListItemsNEW(ddl1,ddl2,ddl3,ddl4,ddl5,ddl6,ddl7)});
			

			
			  
		  }
		  else if(pos==2){
			ddl2=value;ddl3=ddlselitem;ddl4=ddlselitem;ddl5=ddlselitem;
			ddl6=ddlselitem;ddl7=ddlselitem;
			//update the unselected dropdowns
			
			this.setState({ArrayList3: GetDropdownListItemsNEW(ddl1,ddl2,ddl3,ddl4,ddl5,ddl6,ddl7)});
			this.setState({ArrayList4: GetDropdownListItemsNEW(ddl1,ddl2,ddl3,ddl4,ddl5,ddl6,ddl7)});
			this.setState({ArrayList5: GetDropdownListItemsNEW(ddl1,ddl2,ddl3,ddl4,ddl5,ddl6,ddl7)});
			this.setState({ArrayList6: GetDropdownListItemsNEW(ddl1,ddl2,ddl3,ddl4,ddl5,ddl6,ddl7)});
			this.setState({ArrayList7: GetDropdownListItemsNEW(ddl1,ddl2,ddl3,ddl4,ddl5,ddl6,ddl7)});
			
			  //clear label too
			  this.setState({temp3label: AddDigitInCircle('3')});
              this.setState({temp4label: AddDigitInCircle('4')});
              this.setState({temp5label: AddDigitInCircle('5')});
              this.setState({temp6label: AddDigitInCircle('6')});
              this.setState({temp7label: AddDigitInCircle('7')});
			  
				//clear temp state values too
              this.setState({temp3: ddlselitem});
              this.setState({temp4: ddlselitem});
              this.setState({temp5: ddlselitem});
              this.setState({temp6: ddlselitem});
              this.setState({temp7: ddlselitem});
			
		  }
		  else if(pos==3){
			ddl3=value;;ddl4=ddlselitem;ddl5=ddlselitem;
			ddl6=ddlselitem;ddl7=ddlselitem;
			
			this.setState({ArrayList4: GetDropdownListItemsNEW(ddl1,ddl2,ddl3,ddl4,ddl5,ddl6,ddl7)});
			this.setState({ArrayList5: GetDropdownListItemsNEW(ddl1,ddl2,ddl3,ddl4,ddl5,ddl6,ddl7)});
			this.setState({ArrayList6: GetDropdownListItemsNEW(ddl1,ddl2,ddl3,ddl4,ddl5,ddl6,ddl7)});
			this.setState({ArrayList7: GetDropdownListItemsNEW(ddl1,ddl2,ddl3,ddl4,ddl5,ddl6,ddl7)});
			  //clear label too
              this.setState({temp4label: AddDigitInCircle('4')});
              this.setState({temp5label: AddDigitInCircle('5')});
              this.setState({temp6label: AddDigitInCircle('6')});
              this.setState({temp7label: AddDigitInCircle('7')});
			  
				//clear temp state values too
              this.setState({temp4: ddlselitem});
              this.setState({temp5: ddlselitem});
              this.setState({temp6: ddlselitem});
              this.setState({temp7: ddlselitem});
			  
		  }		  
		  else if(pos==4){
			ddl4=value;;ddl5=ddlselitem;
			ddl6=ddlselitem;ddl7=ddlselitem;
			
			this.setState({ArrayList5: GetDropdownListItemsNEW(ddl1,ddl2,ddl3,ddl4,ddl5,ddl6,ddl7)});
			this.setState({ArrayList6: GetDropdownListItemsNEW(ddl1,ddl2,ddl3,ddl4,ddl5,ddl6,ddl7)});
			this.setState({ArrayList7: GetDropdownListItemsNEW(ddl1,ddl2,ddl3,ddl4,ddl5,ddl6,ddl7)});
			  //clear label too
              this.setState({temp5label: AddDigitInCircle('5')});
              this.setState({temp6label: AddDigitInCircle('6')});
              this.setState({temp7label: AddDigitInCircle('7')});
			  
				//clear temp state values too
              this.setState({temp5: ddlselitem});
              this.setState({temp6: ddlselitem});
              this.setState({temp7: ddlselitem});
			  
		  }		  		  
		  else if(pos==5){
			ddl5=value;ddl6=ddlselitem;ddl7=ddlselitem;
			this.setState({ArrayList6: GetDropdownListItemsNEW(ddl1,ddl2,ddl3,ddl4,ddl5,ddl6,ddl7)});
			this.setState({ArrayList7: GetDropdownListItemsNEW(ddl1,ddl2,ddl3,ddl4,ddl5,ddl6,ddl7)});
			  //clear label too
              this.setState({temp6label: AddDigitInCircle('6')});
			  this.setState({temp7label: AddDigitInCircle('7')});
			  
				//clear temp state values too
              this.setState({temp6: ddlselitem});
              this.setState({temp7: ddlselitem});
			  

		  }		  		  		  
		  else if(pos==6){
			ddl6=value;ddl7=ddlselitem;
			this.setState({ArrayList7: GetDropdownListItemsNEW(ddl1,ddl2,ddl3,ddl4,ddl5,ddl6,ddl7)});
			  //clear label too
			  this.setState({temp7label: AddDigitInCircle('7')});
			  
				//clear temp state values too
              this.setState({temp7: ddlselitem});			  
		  }	
		  else if(pos==7){
			ddl7=value;
			
		  }
        }
		
		

        myChangeHandler = (event) => {
          let nam = event.target.name;
          let val = event.target.value;

          //alert(nam + '--' + val);
          //alert(this.state.temp5 + '--name: ' + nam + 'value-> ' + val);
          this.setState({[nam]: val});

          if(nam=="orgid"){
                ReactDOM.render(<p></p>, document.getElementById('valMsgOrgId'));
          }
          if(nam=="customeruniqueid"){
            ReactDOM.render(<p></p>, document.getElementById('spncustomeruniqueid'));
            this.setState({temp1text:val});
          }

          //stoe the seleted text also in the state variable
          if(nam=='refid' || nam=='temp1' || nam=='temp2' || nam=='temp3' || nam=='temp4' || nam=='temp5' || 
              nam=='temp6' || nam=='temp7' || nam=='temp8' || nam=='temp9' || nam=='temp10'){
            var index = event.nativeEvent.target.selectedIndex;
            let label = event.nativeEvent.target[index].text;
            label=(label!="--Select--")?label:"";
            let stick=AddTextLabels();
            if(nam=='refid'){
              this.setState({reftext: label});
              ReactDOM.render(<p></p>, document.getElementById('valMsgRefId'));
            }
            else if(nam=='temp1'){
              this.setState({temp1text: label});
              if(val==""){this.setState({temp1label: AddDigitInCircle('1')});}else{this.setState({temp1label: stick});}
			  this.RefreshOtherDropDownLists(1,val);
            }
            else if(nam=='temp2'){
              this.setState({temp2text: label});
              if(val==""){this.setState({temp2label: AddDigitInCircle('2')});}else{this.setState({temp2label: stick});}
			  
			  this.RefreshOtherDropDownLists(2,val);  //now refresh the other dropdowns
            }
            else if(nam=='temp3'){
              this.setState({temp3text: label});
              if(val==""){this.setState({temp3label: AddDigitInCircle('3')});}else{this.setState({temp3label: stick});}
			  
			  this.RefreshOtherDropDownLists(3,val);  //now refresh the other dropdowns
            }
            else if(nam=='temp4'){
              this.setState({temp4text: label});
              this.setState({temp4label: stick});
              if(val==""){this.setState({temp4label: AddDigitInCircle('4')});}else{this.setState({temp4label: stick});}
			  
			  this.RefreshOtherDropDownLists(4,val);  //now refresh the other dropdowns
            }                                    
            else if(nam=='temp5'){
                this.setState({temp5text: label});
                this.setState({temp5label: stick});
                if(val==""){this.setState({temp5label: AddDigitInCircle('5')});}else{this.setState({temp5label: stick});}
				
				this.RefreshOtherDropDownLists(5,val);  //now refresh the other dropdowns
            }                                    
            else if(nam=='temp6'){
              this.setState({temp6text: label});
                this.setState({temp6label: stick});
                if(val==""){this.setState({temp6label: AddDigitInCircle('6')});}else{this.setState({temp6label: stick});}
				
				this.RefreshOtherDropDownLists(6,val);  //now refresh the other dropdowns
            }                                   
            else if(nam=='temp7'){
              this.setState({temp7text: label});
                this.setState({temp7label: stick});
                if(val==""){this.setState({temp7label: AddDigitInCircle('7')});}else{this.setState({temp7label: stick});}
				
				this.RefreshOtherDropDownLists(7,val);  //now refresh the other dropdowns
            }                                   
            else if(nam=='temp8'){
              this.setState({temp8text: label});
            }                                   
            else if(nam=='temp9'){
              this.setState({temp9text: label});
            }                                   
            else if(nam=='temp10'){
              this.setState({temp10text: label});
            }                                                                                               

          }

           
          //Field Label
          if(nam=="temp8FieldLabel" || nam=="temp9FieldLabel" || nam=="temp10FieldLabel"){

            if(nam=="temp8FieldLabel"){
              this.setState({temp8FieldLabel:val});
            }else if(nam=="temp9FieldLabel"){
              this.setState({temp9FieldLabel:val});
            }else if(nam=="temp10FieldLabel"){
              this.setState({temp10FieldLabel:val});
            }
          }

          //Type
          if(nam=="temp8DataType" || nam=="temp9DataType" || nam=="temp10DataType"){
					
		    let csizecss=" false";
			if(val==1 || val==2 || val==0){
			  csizecss="  true ";
			}
            if(nam=="temp8DataType"){
              this.setState({temp8DataType:val});
			  this.setState({LenthFld8CSS:csizecss});
            }else if(nam=="temp9DataType"){
              this.setState({temp9DataType:val});
			  this.setState({LenthFld9CSS:csizecss});
            }else if(nam=="temp10DataType"){
              this.setState({temp10DataType:val});
			  this.setState({LenthFld10CSS:csizecss});
            }
			
			
			
          }


          //Length
          if(nam=="temp8Length" || nam=="temp9Length" || nam=="temp10Length"){
            if(nam=="temp8Length"){
              this.setState({temp8Length:val});
            }else if(nam=="temp9Length"){
              this.setState({temp9Length:val});
            }else if(nam=="temp10Length"){
              this.setState({temp10Length:val});
            }
          }
        }

        redirectFromWizardSteps(event){
          let Clsname = event.currentTarget.classList[1];
          const CurrentPageNo=this.state.page;
          var RedirectingPageNo=0;
          debugger;
          if(Clsname=="Div1"){
            RedirectingPageNo=1;
          } else if(Clsname=="Div2"){
            RedirectingPageNo=2;
          } else if(Clsname=="Div3"){
            RedirectingPageNo=3;
          }

          if(RedirectingPageNo<=CurrentPageNo){
            this.setState({page:RedirectingPageNo});
          }
          
        }


        render() {
          if(this.state.page==1) {
            return (
              <div>
                  
				{wizardNavigationNew(1, this.redirectFromWizardSteps)}
                {AddLogorow()}
                <div class='e1container'>
                    <div class="row epaddingbottom10">
                        <div class="col-md-11 elRowPg1">
                            <label class='e1labelheaderPage1 e1margintop10'>Hearsay Org ID</label>
                            <input name='orgid' value={this.state.orgid} placeholder='Enter Hearsay Organization ID' class='e1inputpg1' maxlength='40' onChange={this.myChangeHandler} />
                            <span id="valMsgOrgId"></span>
                        </div>
                        <div class="col-md-1"></div>
                    </div>
                  
                    <hr class='e1linecolor'/>

                    <div class="row epaddingbottom10">
                        <div class="col-md-11 elRowPg1">
                            <label class='e1labelheaderPage1'>Hearsay User Reference ID</label>
                            <select name='refid' value={this.state.refid} onChange={this.myChangeHandler} class='e1inputpg1'>
                                <option value="0">--Select--</option>
                                <option value="agentid">Agent ID</option>
                                <option value="emailid">Email ID</option>
                            </select>
                            <span id="valMsgRefId"></span>
                        </div>
                        <div class="col-md-1"></div>
                    </div>            
                  <hr class='e1linecolor'/>
                  <div class="row epaddingbottom10">
                        <div class="col-md-11 elRowPg1">
                            <label class='e1labelheaderPage1 e1margintop10'>Customer Unique ID</label>
                            <input name='customeruniqueid' value={this.state.customeruniqueid} placeholder='Enter Customer Unique ID' class='e1inputpg1' maxlength='40' onChange={this.myChangeHandler} />
                            <span id="spncustomeruniqueid"></span>
                        </div>
                        <div class="col-md-1"></div>
                    </div>
                  
                    <hr class='e1linecolor'/>
                </div>
                {AddButtonBlock(this.handleChangeCancel,this.handleChangeNext,'Next','btn btn-primary btn-xs float-right e1buttonleftpadding',this.handleChangeBack, this.state.page)}
              </div>
            )
          }
          else if(this.state.page==2) {
            return (
              <div>
                {wizardNavigationNew(2, this.redirectFromWizardSteps)}
                {AddLogorow()}
				        
                <div class='e1container'>

                    

					 
                    {AddPage2Row('templatename',this.state.templatename,this.myChangeHandler,'Name','',1,"",'blank',"", "",'')}
                    {AddPage2Row('temp1',this.state.temp1,this.myChangeHandler,this.state.temp1label,this.state.ArrayList1,2,this.state.temp5label,'temp5',this.state.temp5, this.state.customeruniqueid,this.state.ArrayList5)}
					{AddPage2Row('temp2',this.state.temp2,this.myChangeHandler,this.state.temp2label,this.state.ArrayList2,3,this.state.temp6label,'temp6',this.state.temp6, this.state.customeruniqueid,this.state.ArrayList6)}
					{AddPage2Row('temp3',this.state.temp3,this.myChangeHandler,this.state.temp3label,this.state.ArrayList3,4,this.state.temp7label,'temp7',this.state.temp7, this.state.customeruniqueid,this.state.ArrayList7)}
					{AddPage2Row('temp4',this.state.temp4,this.myChangeHandler,this.state.temp4label,this.state.ArrayList4,5,"",'blank','', '','')}
					


				  {AddCustomFieldBlock('temp8FieldLabel','temp8DataType','temp8Length','temp8Button' ,this.state.temp8FieldLabel, this.state.temp8DataType, this.state.temp8Length,this.myChangeHandler, this.updateCustomFieldObject,this.state.Field8Css, this.state.temp8label, this.state.LenthFld8CSS,this.state.temp8ButtonLabel)}
				  {AddCustomFieldBlock('temp9FieldLabel','temp9DataType','temp9Length','temp9Button' ,this.state.temp9FieldLabel, this.state.temp9DataType, this.state.temp9Length,this.myChangeHandler, this.updateCustomFieldObject,this.state.Field9Css, this.state.temp9label, this.state.LenthFld9CSS,this.state.temp9ButtonLabel)}
				  {AddCustomFieldBlock('temp10FieldLabel','temp10DataType','temp10Length','temp10Button' ,this.state.temp10FieldLabel, this.state.temp10DataType, this.state.temp10Length,this.myChangeHandler, this.updateCustomFieldObject,this.state.Field10Css, this.state.temp10label, this.state.LenthFld10CSS,this.state.temp10ButtonLabel)}



                  

                  <div class='row epaddingbottom10 emargintop10 e1marginleft'>
					   <div class='col-md-1'></div>
                      <div class='col-md-11'>
                          <button onClick={this.handleNewFieldClick} class='btn btn-link e1butonfontsize float-left  emargintop10 btn-xs'> + Add New Field</button>
                      </div>
                        
                      
                  </div>
                  <div class='row epaddingbottom10'>
                      <div class='col-md-1'></div>
                      <div class='col-md-10'>
                        <span id="valMsgPageTwo"></span>
                      </div>
                      <div class='col-md-1'></div>
                  </div>

                  <hr class='e1linecolor'/>
                </div>
                {AddButtonBlock(this.handleChangeCancel,this.handleChangeNext,'Next','btn btn-primary btn-xs float-right e1buttonleftpadding',this.handleChangeBack, this.state.page)}
              </div>
            )
          }
          else if(this.state.page==3) {
            return (
              <div>
                {wizardNavigationNew(3, this.redirectFromWizardSteps)}
                {AddLogorow()}
                <div class='e1container'>
                    <div class="row epaddingbottom10 e1marginleft emargintop10">
                        <div class="col-md-11">
                            <label class='e1labelheaderPage3'>HEARSAY ORG ID</label>
                        </div>
                        <div class="col-md-1"></div>

                    </div>
                    <div class="row epaddingbottom10 e1marginleft">
						<div class="col-md-11 ">
                            <label class=''>{this.state.orgid}</label>
                        </div>
                        <div class="col-md-1"></div>
                    </div>
					
					<div class="row epaddingbottom10 e1marginleft emargintop24">
                        <div class="col-md-11">
                            <label class='e1labelheaderPage3'>HEARSAY USER REFERENCE ID</label>
                        </div>
                        <div class="col-md-1"></div>

                    </div>
                    <div class="row epaddingbottom10 e1marginleft">
						<div class="col-md-11 ">
                            <label class=''>{this.state.reftext}</label>
                        </div>
                        <div class="col-md-1"></div>
                    </div>
                    <div class="row epaddingbottom10 e1marginleft emargintop24">
                        <div class="col-md-11">
                            <label class='e1labelheaderPage3'>Customer Unique ID</label>
                        </div>
                        <div class="col-md-1"></div>

                    </div>
                    <div class="row epaddingbottom10 e1marginleft">
						<div class="col-md-11 ">
                            <label class=''>{this.state.customeruniqueid}</label>
                        </div>
                        <div class="col-md-1"></div>
                    </div>
					<div class="row epaddingbottom10 e1marginleft emargintop24">
                        <div class="col-md-11">
                            <label class='e1labelheaderPage3'>DATA EXTENSION TEMPLATES (NEW)</label>
                        </div>
                        <div class="col-md-1"></div>

                    </div>
                    <div class="row epaddingbottom10 e1marginleft">
						<div class="col-md-11 ">
						
								<div>{this.state.templatename} </div>
								<div>{this.state.temp1text} </div>
								<div>{this.state.temp2text} </div>
								<div>{this.state.temp3text} </div>
								<div>{this.state.temp4text} </div>
								<div>{this.state.temp5text} </div>
								<div>{this.state.temp6text} </div>
								<div>{this.state.temp7text} </div>
								<div>{this.state.temp8FieldLabel}  </div>
								<div>{this.state.temp9FieldLabel}</div>
								<div>{this.state.temp10FieldLabel}</div>
                        </div>
                        <div class="col-md-1"></div>
                    </div>
                </div>
                {AddButtonBlock(this.handleChangeCancel,this.handleChangeNext,'Done','btn btn-primary btn-xs float-right e1buttonleftpadding',this.handleChangeBack, this.state.page)}
              </div>
            )
          }          
        }
      }

      ReactDOM.render(<HearsayPage1 />, document.getElementById('mydiv'))
    </script>
  </body>
</html>
