function showError(input, message) {
  let error = document.createElement("div");
  error.className = "error-message";
  error.style.color = "red";
  error.style.fontSize = "12px";
  error.textContent = message;
  input.parentNode.appendChild(error);
}

function clearError(input) {
  let error = input.parentNode.querySelector(".error-message");
  if (error) {
    error.remove();
  }
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function displayServerErrors(errors) {
  errors.forEach(error => {
    let input = document.getElementById(error.param);
    showError(input, error.msg);
  });
}



function validatePhoneNumber(phoneNumber, countryCode) {
  let isValid = false;
  switch (countryCode) {
      case 'US':
          // US format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'CA':
          // Canada format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'UK':
          // UK format (e.g., XXXX XXXXXX)
          isValid = /^[0-9\s]+$/.test(phoneNumber);
          break;
      case 'AF':
          // Afghanistan format (e.g., XXXX XXXXXX)
          isValid = /^[0-9\s]+$/.test(phoneNumber);
          break;
      case 'AL':
          // Albania format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'DZ':
          // Algeria format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'AS':
          // American Samoa format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'AD':
          // Andorra format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'AO':
          // Angola format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'AI':
          // Anguilla format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'AQ':
          // Antarctica format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'AG':
          // Antigua and Barbuda format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'AR':
          // Argentina format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'AM':
          // Armenia format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'AW':
          // Aruba format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'AU':
          // Australia format (e.g., XXXX XXX XXX)
          isValid = /^\d{4}\s\d{3}\s\d{3}$/.test(phoneNumber);
          break;
      case 'AT':
          // Austria format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'AZ':
          // Azerbaijan format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'BS':
          // Bahamas format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'BH':
          // Bahrain format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'BD':
          // Bangladesh format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'BB':
          // Barbados format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'BY':
          // Belarus format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'BE':
          // Belgium format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'BZ':
          // Belize format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'BJ':
          // Benin format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'BM':
          // Bermuda format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'BT':
          // Bhutan format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'BO':
          // Bolivia format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'BA':
          // Bosnia and Herzegovina format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'BW':
          // Botswana format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'BR':
          // Brazil format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'IO':
          // British Indian Ocean Territory format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'VG':
          // British Virgin Islands format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'BN':
          // Brunei format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'BG':
          // Bulgaria format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'BF':
          // Burkina Faso format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'BI':
          // Burundi format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'KH':
          // Cambodia format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'CM':
          // Cameroon format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'CV':
          // Cape Verde format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'KY':
          // Cayman Islands format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'CF':
          // Central African Republic format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'TD':
          // Chad format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'CL':
          // Chile format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'CN':
          // China format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'CX':
          // Christmas Island format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'CC':
          // Cocos Islands format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'CO':
          // Colombia format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'KM':
          // Comoros format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'CK':
          // Cook Islands format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'CR':
          // Costa Rica format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'HR':
          // Croatia format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'CU':
          // Cuba format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'CW':
          // Curaçao format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'CY':
          // Cyprus format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'CZ':
          // Czech Republic format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'CD':
          // Democratic Republic of the Congo format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'DK':
          // Denmark format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'DJ':
          // Djibouti format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'DM':
          // Dominica format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'DO':
          // Dominican Republic format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'TL':
          // East Timor format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'EC':
          // Ecuador format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'EG':
          // Egypt format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'SV':
          // El Salvador format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'GQ':
          // Equatorial Guinea format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'ER':
          // Eritrea format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'EE':
          // Estonia format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'ET':
          // Ethiopia format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'FK':
          // Falkland Islands format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'FO':
          // Faroe Islands format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'FJ':
          // Fiji format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'FI':
          // Finland format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'FR':
          // France format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'PF':
          // French Polynesia format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'GA':
          // Gabon format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'GM':
          // Gambia format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'GE':
          // Georgia format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'DE':
          // Germany format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'GH':
          // Ghana format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'GI':
          // Gibraltar format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'GR':
          // Greece format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'GL':
          // Greenland format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'GD':
          // Grenada format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'GU':
          // Guam format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'GT':
          // Guatemala format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'GN':
          // Guinea format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'GW':
          // Guinea-Bissau format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'GY':
          // Guyana format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'HT':
          // Haiti format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'HN':
          // Honduras format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'HK':
          // Hong Kong format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'HU':
          // Hungary format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'IS':
          // Iceland format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'IN':
          // India format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'ID':
          // Indonesia format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'IR':
          // Iran format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'IQ':
          // Iraq format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'IE':
          // Ireland format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'IM':
          // Isle of Man format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'IL':
          // Israel format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'IT':
          // Italy format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'CI':
          // Ivory Coast format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'JM':
          // Jamaica format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'JP':
          // Japan format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'JO':
          // Jordan format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'KZ':
          // Kazakhstan format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'KE':
          // Kenya format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'KI':
          // Kiribati format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'XK':
          // Kosovo format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'KW':
          // Kuwait format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'KG':
          // Kyrgyzstan format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'LA':
          // Laos format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'LV':
          // Latvia format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'LB':
          // Lebanon format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'LS':
          // Lesotho format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'LR':
          // Liberia format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'LY':
          // Libya format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'LI':
          // Liechtenstein format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'LT':
          // Lithuania format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'LU':
          // Luxembourg format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'MO':
          // Macau format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'MK':
          // Macedonia format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'MG':
          // Madagascar format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'MW':
          // Malawi format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'MY':
          // Malaysia format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'MV':
          // Maldives format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'ML':
          // Mali format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'MT':
          // Malta format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'MH':
          // Marshall Islands format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'MR':
          // Mauritania format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'MU':
          // Mauritius format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'YT':
          // Mayotte format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'MX':
          // Mexico format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'FM':
          // Micronesia format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'MD':
          // Moldova format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'MC':
          // Monaco format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'MN':
          // Mongolia format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'ME':
          // Montenegro format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'MS':
          // Montserrat format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'MA':
          // Morocco format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'MZ':
          // Mozambique format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'MM':
          // Myanmar format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'NA':
          // Namibia format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'NR':
          // Nauru format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'NP':
          // Nepal format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'NL':
          // Netherlands format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'NC':
          // New Caledonia format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'NZ':
          // New Zealand format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'NI':
          // Nicaragua format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'NE':
          // Niger format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'NG':
          // Nigeria format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'NU':
          // Niue format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'NF':
          // Norfolk Island format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'KP':
          // North Korea format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'MP':
          // Northern Mariana Islands format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'NO':
          // Norway format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'OM':
          // Oman format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'PK':
          // Pakistan format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'PW':
          // Palau format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'PS':
          // Palestinian format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'PA':
          // Panama format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'PG':
          // Papua New Guinea format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'PY':
          // Paraguay format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'PE':
          // Peru format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'PH':
          // Philippines format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'PN':
          // Pitcairn Islands format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'PL':
          // Poland format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'PT':
          // Portugal format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'PR':
          // Puerto Rico format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'QA':
          // Qatar format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'CG':
          // Republic of the Congo format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'RO':
          // Romania format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'RU':
          // Russia format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'RW':
          // Rwanda format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'BL':
          // Saint Barthélemy format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'SH':
          // Saint Helena format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'KN':
          // Saint Kitts and Nevis format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'LC':
          // Saint Lucia format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'MF':
          // Saint Martin format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'PM':
          // Saint Pierre and Miquelon format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'VC':
          // Saint Vincent and the Grenadines format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'WS':
          // Samoa format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'SM':
          // San Marino format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'ST':
          // Sao Tome and Principe format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'SA':
          // Saudi Arabia format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'SN':
          // Senegal format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'RS':
          // Serbia format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'SC':
          // Seychelles format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'SL':
          // Sierra Leone format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'SG':
          // Singapore format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'SX':
          // Sint Maarten format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'SK':
          // Slovakia format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'SI':
          // Slovenia format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'SB':
          // Solomon Islands format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'SO':
          // Somalia format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'ZA':
          // South Africa format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'KR':
          // South Korea format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'SS':
          // South Sudan format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'ES':
          // Spain format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'LK':
          // Sri Lanka format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'SD':
          // Sudan format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'SR':
          // Suriname format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'SJ':
          // Svalbard and Jan Mayen format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'SZ':
          // Swaziland format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'SE':
          // Sweden format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'CH':
          // Switzerland format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'SY':
          // Syria format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'TW':
          // Taiwan format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'TJ':
          // Tajikistan format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'TZ':
          // Tanzania format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'TH':
          // Thailand format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'TL':
          // Timor-Leste format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'TG':
          // Togo format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'TK':
          // Tokelau format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'TO':
          // Tonga format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'TT':
          // Trinidad and Tobago format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'TN':
          // Tunisia format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'TR':
          // Turkey format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'TM':
          // Turkmenistan format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'TC':
          // Turks and Caicos Islands format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'TV':
          // Tuvalu format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'UG':
          // Uganda format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'UA':
          // Ukraine format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'AE':
          // United Arab Emirates format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'GB':
          // United Kingdom format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'US':
          // United States format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'UY':
          // Uruguay format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'UZ':
          // Uzbekistan format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'VU':
          // Vanuatu format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'VA':
          // Vatican City format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'VE':
          // Venezuela format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'VN':
          // Vietnam format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'WF':
          // Wallis and Futuna format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'EH':
          // Western Sahara format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'YE':
          // Yemen format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'ZM':
          // Zambia format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      case 'ZW':
          // Zimbabwe format (e.g., XXX-XXX-XXXX)
          isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
          break;
      default:
          isValid = false;
  }

  return isValid;
}