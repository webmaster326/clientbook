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
    let formatMessage = "";
  
    switch (countryCode) {
        case 'US':
            // US format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'CA':
            // Canada format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'UK':
            // UK format (e.g., XXXX XXXXXX)
            isValid = /^[0-9\s]+$/.test(phoneNumber);
            formatMessage = "Format: XXXX XXXXXX or similar";
            break;
        case 'AF':
            // Afghanistan format (e.g., XXXX XXXXXX)
            isValid = /^[0-9\s]+$/.test(phoneNumber);
            formatMessage = "Format: XXXX XXXXXX or similar";
            break;
        case 'AL':
            // Albania format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'DZ':
            // Algeria format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'AS':
            // American Samoa format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'AD':
            // Andorra format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'AO':
            // Angola format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'AI':
            // Anguilla format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'AQ':
            // Antarctica format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'AG':
            // Antigua and Barbuda format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'AR':
            // Argentina format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'AM':
            // Armenia format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'AW':
            // Aruba format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'AU':
            // Australia format (e.g., XXXX XXX XXX)
            isValid = /^\d{4}\s\d{3}\s\d{3}$/.test(phoneNumber);
            formatMessage = "Format: XXXX XXX XXX";
            break;
        case 'AT':
            // Austria format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            break;
        case 'AZ':
            // Azerbaijan format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'BS':
            // Bahamas format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'BH':
            // Bahrain format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'BD':
            // Bangladesh format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'BB':
            // Barbados format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'BY':
            // Belarus format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'BE':
            // Belgium format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'BZ':
            // Belize format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            break;
        case 'BJ':
            // Benin format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'BM':
            // Bermuda format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'BT':
            // Bhutan format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'BO':
            // Bolivia format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'BA':
            // Bosnia and Herzegovina format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'BW':
            // Botswana format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'BR':
            // Brazil format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'IO':
            // British Indian Ocean Territory format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'VG':
            // British Virgin Islands format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'BN':
            // Brunei format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'BG':
            // Bulgaria format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'BF':
            // Burkina Faso format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'BI':
            // Burundi format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'KH':
            // Cambodia format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'CM':
            // Cameroon format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'CV':
            // Cape Verde format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'KY':
            // Cayman Islands format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'CF':
            // Central African Republic format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'TD':
            // Chad format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'CL':
            // Chile format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            break;
        case 'CN':
            // China format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'CX':
            // Christmas Island format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'CC':
            // Cocos Islands format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'CO':
            // Colombia format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'KM':
            // Comoros format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'CK':
            // Cook Islands format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'CR':
            // Costa Rica format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'HR':
            // Croatia format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'CU':
            // Cuba format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'CW':
            // Curaçao format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'CY':
            // Cyprus format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'CZ':
            // Czech Republic format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'CD':
            // Democratic Republic of the Congo format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'DK':
            // Denmark format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'DJ':
            // Djibouti format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'DM':
            // Dominica format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'DO':
            // Dominican Republic format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'TL':
            // East Timor format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'EC':
            // Ecuador format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'EG':
            // Egypt format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'SV':
            // El Salvador format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'GQ':
            // Equatorial Guinea format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'ER':
            // Eritrea format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'EE':
            // Estonia format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'ET':
            // Ethiopia format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'FK':
            // Falkland Islands format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'FO':
            // Faroe Islands format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'FJ':
            // Fiji format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'FI':
            // Finland format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'FR':
            // France format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'PF':
            // French Polynesia format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'GA':
            // Gabon format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'GM':
            // Gambia format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'GE':
            // Georgia format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'DE':
            // Germany format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'GH':
            // Ghana format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'GI':
            // Gibraltar format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'GR':
            // Greece format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'GL':
            // Greenland format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'GD':
            // Grenada format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'GU':
            // Guam format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'GT':
            // Guatemala format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'GN':
            // Guinea format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'GW':
            // Guinea-Bissau format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'GY':
            // Guyana format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'HT':
            // Haiti format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'HN':
            // Honduras format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'HK':
            // Hong Kong format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'HU':
            // Hungary format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'IS':
            // Iceland format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'IN':
            // India format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'ID':
            // Indonesia format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'IR':
            // Iran format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'IQ':
            // Iraq format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'IE':
            // Ireland format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'IM':
            // Isle of Man format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'IL':
            // Israel format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'IT':
            // Italy format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'CI':
            // Ivory Coast format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'JM':
            // Jamaica format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'JP':
            // Japan format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'JO':
            // Jordan format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'KZ':
            // Kazakhstan format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'KE':
            // Kenya format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'KI':
            // Kiribati format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'XK':
            // Kosovo format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'KW':
            // Kuwait format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'KG':
            // Kyrgyzstan format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'LA':
            // Laos format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'LV':
            // Latvia format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'LB':
            // Lebanon format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'LS':
            // Lesotho format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'LR':
            // Liberia format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'LY':
            // Libya format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'LI':
            // Liechtenstein format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'LT':
            // Lithuania format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'LU':
            // Luxembourg format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'MO':
            // Macau format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'MK':
            // Macedonia format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'MG':
            // Madagascar format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'MW':
            // Malawi format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'MY':
            // Malaysia format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'MV':
            // Maldives format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'ML':
            // Mali format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'MT':
            // Malta format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'MH':
            // Marshall Islands format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'MR':
            // Mauritania format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'MU':
            // Mauritius format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'YT':
            // Mayotte format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'MX':
            // Mexico format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'FM':
            // Micronesia format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'MD':
            // Moldova format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'MC':
            // Monaco format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'MN':
            // Mongolia format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'ME':
            // Montenegro format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'MS':
            // Montserrat format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'MA':
            // Morocco format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'MZ':
            // Mozambique format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'MM':
            // Myanmar format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'NA':
            // Namibia format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'NR':
            // Nauru format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'NP':
            // Nepal format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'NL':
            // Netherlands format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'NC':
            // New Caledonia format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'NZ':
            // New Zealand format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'NI':
            // Nicaragua format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'NE':
            // Niger format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'NG':
            // Nigeria format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'NU':
            // Niue format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'NF':
            // Norfolk Island format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'KP':
            // North Korea format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'MP':
            // Northern Mariana Islands format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'NO':
            // Norway format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'OM':
            // Oman format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'PK':
            // Pakistan format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'PW':
            // Palau format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'PS':
            // Palestinian format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'PA':
            // Panama format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'PG':
            // Papua New Guinea format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'PY':
            // Paraguay format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'PE':
            // Peru format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'PH':
            // Philippines format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'PN':
            // Pitcairn Islands format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'PL':
            // Poland format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'PT':
            // Portugal format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'PR':
            // Puerto Rico format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'QA':
            // Qatar format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'CG':
            // Republic of the Congo format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'RO':
            // Romania format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'RU':
            // Russia format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'RW':
            // Rwanda format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'BL':
            // Saint Barthélemy format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'SH':
            // Saint Helena format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'KN':
            // Saint Kitts and Nevis format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'LC':
            // Saint Lucia format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'MF':
            // Saint Martin format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'PM':
            // Saint Pierre and Miquelon format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'VC':
            // Saint Vincent and the Grenadines format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'WS':
            // Samoa format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'SM':
            // San Marino format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'ST':
            // Sao Tome and Principe format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'SA':
            // Saudi Arabia format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'SN':
            // Senegal format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'RS':
            // Serbia format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'SC':
            // Seychelles format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'SL':
            // Sierra Leone format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'SG':
            // Singapore format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'SX':
            // Sint Maarten format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'SK':
            // Slovakia format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'SI':
            // Slovenia format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'SB':
            // Solomon Islands format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'SO':
            // Somalia format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'ZA':
            // South Africa format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'KR':
            // South Korea format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'SS':
            // South Sudan format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'ES':
            // Spain format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'LK':
            // Sri Lanka format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'SD':
            // Sudan format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'SR':
            // Suriname format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'SJ':
            // Svalbard and Jan Mayen format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'SZ':
            // Swaziland format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'SE':
            // Sweden format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'CH':
            // Switzerland format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'SY':
            // Syria format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'TW':
            // Taiwan format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'TJ':
            // Tajikistan format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'TZ':
            // Tanzania format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'TH':
            // Thailand format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'TL':
            // Timor-Leste format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'TG':
            // Togo format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'TK':
            // Tokelau format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'TO':
            // Tonga format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'TT':
            // Trinidad and Tobago format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'TN':
            // Tunisia format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'TR':
            // Turkey format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'TM':
            // Turkmenistan format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'TC':
            // Turks and Caicos Islands format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'TV':
            // Tuvalu format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'UG':
            // Uganda format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'UA':
            // Ukraine format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'AE':
            // United Arab Emirates format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'GB':
            // United Kingdom format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'US':
            // United States format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'UY':
            // Uruguay format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'UZ':
            // Uzbekistan format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'VU':
            // Vanuatu format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'VA':
            // Vatican City format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'VE':
            // Venezuela format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'VN':
            // Vietnam format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'WF':
            // Wallis and Futuna format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'EH':
            // Western Sahara format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'YE':
            // Yemen format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'ZM':
            // Zambia format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        case 'ZW':
            // Zimbabwe format (e.g., XXX-XXX-XXXX)
            isValid = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
            formatMessage = "Format: XXX-XXX-XXXX";
            break;
        default:
          formatMessage = "Invalid country code";
            isValid = false;
    }
  
    if (!isValid) {
      return { isValid: false, message: `Invalid phone number format for selected country. ${formatMessage}` };
    }
    
    return { isValid: true };
  }