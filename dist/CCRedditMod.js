(()=>{"use strict";function e(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,o=new Array(r);t<r;t++)o[t]=e[t];return o}const r=function(r){r.forEach((function(r){var t="".concat(r.description).concat(r.quote?"<q>".concat(r.quote,"</q>"):""),o=[r.icon[0],r.icon[1],"https://i.imgur.com/8n2doVH.png"],n=new Game.Upgrade(r.name,t,r.price,o);n.mod="ccreddit_mod",n.pool="prestige",n.order=r.order,r.parents.forEach((function(e){n.parents.push(Game.Upgrades[e])}));var a,i,c=(a=r.position,i=2,function(e){if(Array.isArray(e))return e}(a)||function(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],o=!0,n=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(o=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);o=!0);}catch(e){n=!0,a=e}finally{try{o||null==c.return||c.return()}finally{if(n)throw a}}return t}}(a,i)||function(r,t){if(r){if("string"==typeof r)return e(r,t);var o=Object.prototype.toString.call(r).slice(8,-1);return"Object"===o&&r.constructor&&(o=r.constructor.name),"Map"===o||"Set"===o?Array.from(r):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(r,t):void 0}}(a,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());n.posX=c[0],n.posY=c[1],Game.PrestigeUpgrades.push(n)}))};var t={init:function(){r([{name:"Misfortune cookies",description:'The news ticker may occasionally have <b>misfortunes</b>, which may be clicked for "something".',quote:"",price:66666666666,icon:[0,1],parents:["Distilled essence of redoubled luck"],position:[75,495],order:644}])},save:function(){var e={boughtUpgrades:[],unlockedUpgrades:[]};return Game.UpgradesById.forEach((function(r){"ccreddit_mod"===r.mod&&(r.bought&&e.boughtUpgrades.push(r.name),!r.bought&&r.unlocked&&e.unlockedUpgrades.push(r.name))})),JSON.stringify(e)},load:function(e){var r=JSON.parse(e);r.unlockedUpgrades.forEach((function(e){Game.Unlock(e)})),r.boughtUpgrades.forEach((function(e){Game.Upgrades[e].bought=1}))},HeavenlyUpgrades:r};Game.registerMod("ccreddit_mod",t)})();
//# sourceMappingURL=CCRedditMod.js.map