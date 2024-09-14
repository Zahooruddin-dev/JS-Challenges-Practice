import { placeholderPropertyObj } from './properties/placeholderPropertyObj.js';
import { propertyForSaleArr } from './properties/propertyForSaleArr.js';
function getPropertyHtml() {
    let propertiesForSaleHtml=''
	const propertiesForSale = propertyForSaleArr.map((sale) => {
		const { propertyLocation, priceGBP, roomsM2, image,comment } = sale;
        const totalSize = roomsM2.reduce((total,sides)=> total+sides,0)
        propertiesForSaleHtml+= `<section class="card">
        <img src="./images/${image}">
        <div class="card-right">
            <h2>${propertyLocation}</h2>
            <h3>${priceGBP}</h3>
            <p>${comment}</p>
            <h3>${totalSize} m&sup2;</h3>
        </div>
    </section> `;
    }).join('');
	
return propertiesForSaleHtml
}
document.getElementById('container').innerHTML = getPropertyHtml();
