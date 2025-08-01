// Organization data
const organizations = {
    'tech-solutions': {
        name: 'Tech Solutions Inc.',
        address: '123 Tech Park, Silicon Valley, CA 94025',
        phone: '(555) 123-4567',
        email: 'info@techsolutions.com',
        website: 'www.techsolutions.com',
        contactPerson: 'Sarah Johnson (CTO)'
    },
    'green-earth': {
        name: 'Green Earth Foundation',
        address: '456 Eco Drive, Portland, OR 97201',
        phone: '(503) 987-6543',
        email: 'contact@greenearth.org',
        website: 'www.greenearth.org',
        contactPerson: 'Michael Chen (Director)'
    },
    'global-finance': {
        name: 'Global Finance Group',
        address: '789 Wall Street, New York, NY 10005',
        phone: '(212) 555-7890',
        email: 'inquiries@gfg.com',
        website: 'www.globalfinance.com',
        contactPerson: 'Robert Williams (Account Manager)'
    },
    'creative-minds': {
        name: 'Creative Minds Academy',
        address: '101 Education Blvd, Austin, TX 73301',
        phone: '(512) 555-2468',
        email: 'admissions@creativeminds.edu',
        website: 'www.creativeminds.edu',
        contactPerson: 'Dr. Emily Rodriguez (Principal)'
    },
    'urban-eats': {
        name: 'Urban Eats Restaurant Group',
        address: '321 Foodie Lane, Chicago, IL 60601',
        phone: '(312) 555-1357',
        email: 'contact@urbaneats.com',
        website: 'www.urbaneats.com',
        contactPerson: 'David Kim (Operations Manager)'
    }
};

// Function to render organization content
function renderOrganization(org) {
    return `
        <div class="contact-section">
            <h2 class="org-name">${org.name}</h2>
            <div class="contact-info">
                <p><strong>Address:</strong> ${org.address}</p>
                <p><strong>Phone:</strong> ${org.phone}</p>
                <p><strong>Email:</strong> ${org.email}</p>
                <p><strong>Website:</strong> ${org.website}</p>
                <p><strong>Contact Person:</strong> ${org.contactPerson}</p>
            </div>
        </div>
    `;
}

// Main execution
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const orgCode = params.get("org")?.toLowerCase();
    const contentDiv = document.getElementById('content');

    if (!orgCode) {
        contentDiv.innerHTML = "<h2>Access Denied</h2><p>You must access this page via an authorized link or QR code with a valid organization code.</p>";
    } else if (organizations[orgCode]) {
        // Show specific organization
        contentDiv.innerHTML = renderOrganization(organizations[orgCode]);
        document.title = organizations[orgCode].name;
    } else {
        // Invalid organization code
        contentDiv.innerHTML = "<h2>Organization Not Found</h2><p>The requested organization could not be found. Please check the link or <a href='?'>try again</a>.</p>";
    }
});
