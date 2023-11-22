const Appetizer = () => {
    const AppetizerContent = document.createElement('div');
    AppetizerContent.setAttribute('class', 'container');

    const AppetizerHeader = document.createElement('h1');
    AppetizerHeader.setAttribute('class', 'text-center my-3 pt-5 mb-5');
    AppetizerHeader.innerHTML = 'APPETIZERS';

    return AppetizerContent;
  };
  
  export default Appetizer;