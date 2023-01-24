const countries =  ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea","Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
const inputSearch = document.querySelector('.search');
const countryList = document.querySelector('.list__of__countries');
const switchSelected = document.querySelector('.switch');
const clearAll = document.querySelector('.clear__all');
const hide = (element) => element.classList.add('hidden');
const show = (element) => element.classList.remove('hidden');
const options = () => document.querySelectorAll('.select');
const selectCheckbox = (elem) => elem.querySelector('.select__check');

inputSearch.addEventListener('input', filterSelectElements);
switchSelected.addEventListener('change', toogleSwitch);
clearAll.addEventListener('click', clearAllSelected)

function renderSelectElements (){
    let list = '';
    countries.forEach((country) => {
        list += renderTemplate(country)
    })

    countryList.innerHTML = list;
}

function renderTemplate(country){
  return `
  <div class="select">
      <input type="checkbox" id="${country}" class="select__check"></input>
      <label class="select__country" for="${country}">${country}</label>
      <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5656 2.38749L6.19322 9.75932C5.64729 10.3054 4.76171 10.3054 4.21526 9.75932L0.409603 5.95339C-0.136534 5.40735 -0.136534 4.52166 0.409603 3.97553C0.955845 3.42928 1.84136 3.42928 2.38736 3.97532L5.20453 6.79253L11.5875 0.409526C12.1337 -0.136716 13.0193 -0.136302 13.5654 0.409526C14.1114 0.955664 14.1114 1.84104 13.5656 2.38749Z" fill="white"/></svg>
  </div>
  `
}

function filterSelectElements(){
    toogleSwitch(); 
    const searchValue = this.value.toUpperCase();
    const selectElements = options();
    selectElements.forEach(elem => {  
      const selected = selectCheckbox(elem).checked;  
      let elementValue = elem.textContent.toUpperCase();
      if(selected || elementValue.includes(searchValue)){
        show(elem);
      }else{
        hide(elem);
      }
    })
}

function toogleSwitch (e){
  const selectElements = options();
  selectElements.forEach(elem => {  
    const selected = elem.querySelector('.select__check').checked;  
    if(!this.checked || selected){
      show(elem);     
    }else{
      hide(elem);
    }
})
}

function clearAllSelected (e){
  const selectElements = options();
  inputSearch.value = '';
  selectElements.forEach(elem => {  
    elem.querySelector('.select__check').checked = false;
    show(elem);    
  })
  
}

renderSelectElements ();