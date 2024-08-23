import { LightningElement ,api, track} from 'lwc';
import staticResourceBaseURL from '@salesforce/resourceUrl/CompanyLogo';
export default class ResponsiveNavBar extends LightningElement {
    @api navItems = '[]'; // Default to empty JSON array string
    @api showProfile = false;
    @api showLogout = false;
    @track isDesktopView = true; // Track whether the view is desktop or not
    companyLogoSrc = staticResourceBaseURL;
    @api desktopComapanyLogoStyle = 'width:180px; height: 50px; margin-left:1rem';
    @api tabCompanyLogoStyle = 'width:180px; height: 50px;  margin-block: 0.5rem';
    @api mobileComapnyLogoStyle = 'width:150px; height: 40px; margin-top: 1rem';
    @api profileLink;
    @api logoutLink;

    get comapanyLogoStyle() {
        return this.getCompanyLogoStyle();
    }
    connectedCallback() {
        this.parseNavigationItems();
        console.log('companyLogoSrc ' + JSON.stringify(this.companyLogoSrc));
        window.addEventListener('resize', this.updateViewMode.bind(this));
    }
    disconnectedCallback() {
        window.removeEventListener('resize', this.updateViewMode.bind(this));
    }
    parseNavigationItems() {
        try {
            this.navItems = JSON.parse(this.navItems);
            this.navItems = this.navItems.map(item => {
               return {
                ...item,
                "dropdown__item" : item.subItems ? 'dropdown__item' : ''
                }
               
            })
        } catch (error) {
            console.error('Invalid JSON format for navigationItems', error);
            this.navItems = [];
        }
    }

    getCompanyLogoStyle() {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 768) return this.mobileComapnyLogoStyle;
        if (screenWidth <= 1024) return this.tabCompanyLogoStyle;
        return this.desktopComapanyLogoStyle;
    }

    updateViewMode() {
        const screenWidth = window.innerWidth;
        this.isDesktopView = screenWidth > 1118; // Set true if screen width is greater than 1118px
    }

    toggleMenu() {
    const navMenu = this.template.querySelector('.nav__menu');
    const toggleIcon = this.template.querySelector('.nav__toggle');

    // Toggle the visibility of the menu
    navMenu.classList.toggle('show-menu');

    // Toggle the icons for menu and close
    toggleIcon.classList.toggle('show-icon');
}
}