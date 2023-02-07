module.exports = {
    
    addLogout:  (data, options) => {
        console.log(data);
        if (data.logged_in) {
        return 'navbarlogout'
        }
        else {
            return 
        }
    }
};