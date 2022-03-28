var coins = 0;
			var level = 1;
			var controllerone = 1;
			var controllertwo = 1;
			var controllerthree = 1;
			var controllerfour = 1;
			var controllerfive = 1;
			var controllersix = 1;
			var controllerseven = 1;
			var controllereight = 1;
			var controllernine = 1;
			var controllerten = 1;
			var controllereleven = 1;
			var controllertwelve = 1;
			var controllerthirteen = 1;
			var controllerfourteen = 1;
			function main() {
				var magic = document.getElementById("get");
				var s = document.getElementById("set");
				if (magic.value == "earn") {
					let rich = (Math.floor(Math.random() * (1000 - 1 + 1) + 1)) * level
					s.innerHTML = `You just earn ${rich} coins!`
					coins += rich;
				} else if (magic.value == "bank") {
					s.innerHTML = `You have ${coins} coins!`;
				} else {
					s.innerHTML = "Type earn to earn some money, type bank to view your bank.";
				}
				if (coins >= 2000) {
					if (controllerone == 1) {
						level++
						window.alert(`You just upgrade from level 1 -> level 2!`);
						controllerone = 0;
					}
				}
				if (coins >= 4000) {
					if (controllertwo == 1) {
						level++
						window.alert(`You just upgrade from level 2 -> level 3!`);
						controllertwo = 0;
					}
				}
				if (coins >= 8000) {
					if (controllerthree == 1) {
						level++
						window.alert(`You just upgrade from level 3 -> level 4!`);
						controllerthree = 0;
					}
				}
				if (coins >= 16000) {
					if (controllerfour == 1) {
						level++
						window.alert(`You just upgrade from level 4 -> level 5!`);
						controllerfour = 0;
					}
				}
				
				if (coins >= 32000) {
					if (controllerfive == 1) {
						level++
						window.alert(`You just upgrade from level 5 -> level 6!`);
						controllerfive = 0;
					}
				}
				if (coins >= 64000) {
					if (controllersix == 1) {
						level++
						window.alert(`You just upgrade from level 6 -> level 7!`);
						controllersix = 0;
					}
				}
				if (coins >= 128000) {
					if (controllerseven == 1) {
						level++
						window.alert(`You just upgrade from level 7 -> level 8!`);
						controllerseven = 0;
					}
				}
				if (coins >= 256000) {
					if (controllereight == 1) {
						level++
						window.alert(`You just upgrade from level 8 -> level 9!`);
						controllereight = 0;
					}
				}
				if (coins >= 512000) {
					if (controllernine == 1) {
						level++
						window.alert(`You just upgrade from level 9 -> level 10!`);
						controllernine = 0;
					}
				}
				if (coins >= 1024000) {
					if (controllerten == 1) {
						level++
						window.alert(`You just upgrade from level 10 -> level 11!`);
						controllerten = 0;
					}
				}
				
				if (coins >= 2048000) {
					if (controllereleven == 1) {
						level++
						window.alert(`You just upgrade from level 11 -> level 12!`);
						controllereleven = 0;
					}
				}
				if (coins >= 4096000) {
					if (controllertwelve == 1) {
						level++
						window.alert(`You just upgrade from level 12 -> level 13!`);
						controllertwelve = 0;
					}
				}
				if (coins >= 8192000) {
					if (controllerthirteen == 1) {
						level++
						window.alert(`You just upgrade from level 13 -> level 14!`);
						controllerthirteen = 0;
					}
				}
				if (coins >= 16384000) {
					level++
					if (controllerfourteen == 1) {
						window.alert(`You just upgrade from level 14 -> level 15! Congrats on reaching the maximum level! God mode is now activated!`);
						controllerfourteen = 0;
					}
				}
			}
			function target() {
				document.getElementById("name").innerHTML = document.getElementById("naming").value;
			}
			function targettwo() {
				document.getElementById("link").src = document.getElementById("linking").value;
			}