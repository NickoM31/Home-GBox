(function(){
	"use strict";
	var app = {
		init : function(){
			app.button1();
			app.button2();
			app.button3();
			app.button4();
			app.button5();
			app.button6();
			app.button7();
			app.button8();
			app.button9();
			app.button10();
			app.button11();
			app.button12();
			app.button13();
			app.button14();
			app.button15();
			app.button16();
		},

		button1 : function(){
			$('.pad1').on('click', playSound);

			function playSound() {  
				document.querySelector('.pd1').play();
				$("#defil").html("Kick");
				app.defil();
			};
		},

		button2 : function(){
			$('.pad2').on('click', playSound);

			function playSound() {  
				document.querySelector('.pd2').play();
				$("#defil").html("Snare");
				app.defil();
			};
		},
		button3 : function(){
			$('.pad3').on('click', playSound);

			function playSound() {  
				document.querySelector('.pd3').play();
				$("#defil").html("Hi Hat1");
				app.defil();
			};
		},
		button4 : function(){
			$(".bt4").on('click',function(){
				console.log('clikkkkkk')
			});
		},
		button5 : function(){
			$('.pad5').on('click', playSound);

			function playSound() {  
				document.querySelector('.pd5').play();
				$("#defil").html("Kick2");
				app.defil();
			};
		},
		button6 : function(){
			$('.pad6').on('click', playSound);

			function playSound() {  
				document.querySelector('.pd6').play();
				$("#defil").html("Snare2");
				app.defil();
			};
		},
		button7 : function(){
			$(".bt7").on('click',function(){
				console.log('clikkkkkk')
			});
		},
		button8 : function(){
			$(".bt8").on('click',function(){
				console.log('clikkkkkk')
			});
		},
		button9 : function(){
			$(".bt9").on('click',function(){
				console.log('clikkkkkk')
			});
		},
		button10 : function(){
			$(".bt10").on('click',function(){
				console.log('clikkkkkk')
			});
		},
		button11 : function(){
			$(".bt11").on('click',function(){
				console.log('clikkkkkk')
			});
		},
		button12 : function(){
			$(".bt12").on('click',function(){
				console.log('clikkkkkk')
			});
		},
		button13 : function(){
			$(".bt13").on('click',function(){
				console.log('clikkkkkk')
			});
		},
		button14 : function(){
			$(".bt14").on('click',function(){
				console.log('clikkkkkk')
			});
		},
		button15 : function(){
			$(".bt15").on('click',function(){
				console.log('clikkkkkk')
			});
		},
		button16 : function(){
			$(".bt16").on('click',function(){
				console.log('clikkkkkk')
			});
		},

		// defil : function(){
		// 	clearInterval(this.intervalId);
		// 	this.intervalId = setInterval(function(){
		// 		$("#defil").animate({marginLeft:-180},3000,function(){
		// 			$(this).css({marginLeft:+180}).find("#defil").after($(this).find("#defil"));
		// 		})
		// 	}, 0);
		// },
	};

	$(document).ready(function(){
		app.init();
	});
})();