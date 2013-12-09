// JavaScript Document
$(document).ready(function(){ 


	function clr1attack(){ //Cleric Mace attack
		var atkroll = new Number(0);
		var dmgroll = new Number(0);
		var resultTxt=new String("placeholder"); 
		
		atkroll = Math.ceil(Math.random() * 20);
		dmgroll = Math.ceil(Math.random() * 6) + 3;
		
		if(atkroll == '20'){//Crit Check
			resultTxt ="Critical Hit! Your attack deals max damage (9)."
		}
		
		else if(atkroll == '1'){//Fumble check
			resultTxt ="Fumble! Your attack auto misses."
		}
		
		else{	
			atkroll = atkroll + 4;
			resultTxt = "+ " + atkroll +" vs. AC | " + dmgroll + " damage on a hit."
		}
		
		var strAllresultTxt = new String(resultTxt);
		var contentText=document.getElementById("clr1text");	   
	   	contentText.innerHTML=strAllresultTxt;			
	} //End Cleric Mace attack
	
	function clr2attack(){ //Cleric Spell attack

		var dmgroll = new Number(0);
		var resultTxt=new String("placeholder"); 
		

		dmgroll = Math.ceil(Math.random() * 8);
		
		resultTxt = "vs. Dex Save | " + dmgroll + " damage on a hit."
		var strAllresultTxt = new String(resultTxt);
		var contentText=document.getElementById("clr2text");	   
	   	contentText.innerHTML=strAllresultTxt;			
	}//End Cleric Spell attack
	
	function rgr1attack(){ //Ranger melee attack
		var atkroll = new Number(0);
		var dmgroll = new Number(0);
		var resultTxt=new String("placeholder"); 
		
		atkroll = Math.ceil(Math.random() * 20);
		dmgroll = Math.ceil(Math.random() * 8) + 3;
		
		if(atkroll == '20'){//Crit Check
			resultTxt ="Critical Hit! Your attack deals max damage (11)."
		}
		
		else if(atkroll == '1'){//Fumble check
			resultTxt ="Fumble! Your attack auto misses."
		}
		
		else{	
			atkroll= atkroll + 3;
			resultTxt = "+ " + atkroll +" vs. AC | " + dmgroll + " damage on a hit."
		}
		

		var strAllresultTxt = new String(resultTxt);
		var contentText=document.getElementById("rgr1text");	   
	   	contentText.innerHTML=strAllresultTxt;			
	}//End Ranger melee attack
	
	function rgr2attack(){ //Ranger Bow attack
		var atkroll = new Number(0);
		var dmgroll = new Number(0);
		var resultTxt=new String("placeholder"); 
		
		atkroll = Math.ceil(Math.random() * 20);
		dmgroll = Math.ceil(Math.random() * 8) + 3;
		
		if(atkroll == '20'){//Crit Check
			resultTxt ="Critical Hit! Your attack deals max damage (11)."
		}
		
		else if(atkroll == '1'){//Fumble check
			resultTxt ="Fumble! Your attack auto misses."
		}
		
		else{	
			atkroll = atkroll + 4;	
			resultTxt = "+ " + atkroll +" vs. AC | " + dmgroll + " damage on a hit."
		}
		
		var strAllresultTxt = new String(resultTxt);
		var contentText=document.getElementById("rgr2text");	   
	   	contentText.innerHTML=strAllresultTxt;			
	}//End ranger bow attack

	function wzd1attack(){//Wizard melee attack
		var atkroll = new Number(0);
		var dmgroll = new Number(0);
		var resultTxt=new String("placeholder"); 
		
		atkroll = Math.ceil(Math.random() * 20);
		dmgroll = Math.ceil(Math.random() * 8);
		
		if(atkroll == '20'){//Crit Check
			resultTxt ="Critical Hit! Your attack deals max damage (8)."
		}
		
		else if(atkroll == '1'){//Fumble check
			resultTxt ="Fumble! Your attack auto misses."
		}
		
		else{		
			resultTxt = "+ " + atkroll +" vs. AC | " + dmgroll + " damage on a hit."
		}
		
		var strAllresultTxt = new String(resultTxt);
		var contentText=document.getElementById("wzd1text");	   
	   	contentText.innerHTML=strAllresultTxt;			
	}//End wizard melee attack
	
	function wzd2attack(){//Wizard spell attack

		var dmgroll = new Number(0);
		var resultTxt=new String("placeholder"); 
		

		dmgroll = Math.ceil(Math.random() * 8);
		
		resultTxt = "vs. Dex Save | " + dmgroll + " damage on a hit."
		var strAllresultTxt = new String(resultTxt);
		var contentText=document.getElementById("wzd2text");	   
	   	contentText.innerHTML=strAllresultTxt;			
	}//End wizard spell attack
	
	$('#clr1button').click(clr1attack);
	$('#clr2button').click(clr2attack);

	$('#rgr1button').click(rgr1attack);
	$('#rgr2button').click(rgr2attack);

	$('#wzd1button').click(wzd1attack);
	$('#wzd2button').click(wzd2attack);

});