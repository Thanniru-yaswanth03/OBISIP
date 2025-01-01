function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}
document.getElementById('orderForm').onsubmit = function (e) {
    e.preventDefault(); 
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const pizza = document.getElementById('pizza').value;

    alert(`Thank you, ${name}! Your ${pizza} will be delivered to ${address} soon.`);
    this.reset(); 
};
