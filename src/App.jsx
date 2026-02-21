
import React, { useState, useEffect } from 'react';

// Icon placeholders (replace with actual SVG imports or icon library if available)
const DashboardIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg>;
const ContractIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>;
const ClaimIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
const CustomerIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const DealershipIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
const ReportIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="14" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M22 18V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2zm-6-3H8"></path></svg>;
const SettingsIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>;
const SearchIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const FilterIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>;
const ExportIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>;
const PlusIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;
const EditIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>;

// Component for real-time pulse effect
const PulseEffect = ({ children }) => {
    const [isPulsing, setIsPulsing] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsPulsing(true);
            const timeout = setTimeout(() => setIsPulsing(false), 2000); // Pulse for 2 seconds
            return () => clearTimeout(timeout);
        }, Math.random() * 10000 + 5000); // Random interval between 5-15 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={isPulsing ? 'pulse-effect' : ''} style={{ position: 'relative' }}>
            {children}
        </div>
    );
};

// Main App Component
const App = () => {
    const ROLES = {
        FI_PRODUCT_MANAGER: 'F&I Product Manager',
        CUSTOMER_SERVICE_REP: 'Customer Service Representative',
        DEALERSHIP_PORTAL_USER: 'Dealership Portal User',
        VEHICLE_OWNER: 'Vehicle Owner',
        SYSTEM_ARCHITECT: 'System Architect',
    };

    const STATUS_COLORS = {
        'ACTIVE': 'var(--color-approved)',
        'PENDING_APPROVAL': 'var(--color-pending)',
        'EXPIRED': 'var(--color-expired)',
        'CANCELLED': 'var(--color-danger)',
        'SUBMITTED': 'var(--color-submitted)',
        'UNDER_REVIEW': 'var(--color-info)',
        'APPROVED': 'var(--color-approved)',
        'REJECTED': 'var(--color-danger)',
        'PAID': 'var(--color-paid)',
        'INITIATED': 'var(--color-pending)',
    };

    const STATUS_LABELS = {
        'ACTIVE': 'Active',
        'PENDING_APPROVAL': 'Pending Approval',
        'EXPIRED': 'Expired',
        'CANCELLED': 'Cancelled',
        'SUBMITTED': 'Submitted',
        'UNDER_REVIEW': 'Under Review',
        'APPROVED': 'Approved',
        'REJECTED': 'Rejected',
        'PAID': 'Paid',
        'INITIATED': 'Initiated',
    };

    // Dummy Data - 5-10 records per entity
    const dummyContracts = [
        {
            id: 'VSC001', customerId: 'CUST001', customerName: 'Alice Smith', vehicle: 'Toyota Camry 2020', planType: 'Gold Plus',
            startDate: '2023-01-15', endDate: '2028-01-14', status: 'ACTIVE', premium: 2500, deductible: 100,
            dealershipId: 'DEAL001', dealershipName: 'AutoWorld Motors', notes: 'Customer opted for comprehensive coverage.'
        },
        {
            id: 'VSC002', customerId: 'CUST002', customerName: 'Bob Johnson', vehicle: 'Honda CRV 2022', planType: 'Silver',
            startDate: '2023-03-20', endDate: '2028-03-19', status: 'PENDING_APPROVAL', premium: 1800, deductible: 250,
            dealershipId: 'DEAL002', dealershipName: 'Luxury Auto Group', notes: 'New contract, awaiting underwriting.'
        },
        {
            id: 'VSC003', customerId: 'CUST003', customerName: 'Charlie Brown', vehicle: 'Ford F-150 2019', planType: 'Platinum',
            startDate: '2022-07-01', endDate: '2027-06-30', status: 'ACTIVE', premium: 3200, deductible: 50,
            dealershipId: 'DEAL001', dealershipName: 'AutoWorld Motors', notes: 'High-tier plan, no prior claims.'
        },
        {
            id: 'VSC004', customerId: 'CUST004', customerName: 'Diana Prince', vehicle: 'Tesla Model 3 2021', planType: 'Electric Vehicle',
            startDate: '2023-05-10', endDate: '2028-05-09', status: 'EXPIRED', premium: 2000, deductible: 150,
            dealershipId: 'DEAL003', dealershipName: 'Future Ride EV', notes: 'Expired on 2024-05-09. Renewal reminder sent.'
        },
        {
            id: 'VSC005', customerId: 'CUST005', customerName: 'Eve Adams', vehicle: 'BMW X5 2023', planType: 'Gold Plus',
            startDate: '2024-02-01', endDate: '2029-01-31', status: 'ACTIVE', premium: 2800, deductible: 100,
            dealershipId: 'DEAL002', dealershipName: 'Luxury Auto Group', notes: 'Newest contract, premium client.'
        },
        {
            id: 'VSC006', customerId: 'CUST006', customerName: 'Frank White', vehicle: 'Nissan Altima 2018', planType: 'Silver',
            startDate: '2022-01-01', endDate: '2027-12-31', status: 'CANCELLED', premium: 1500, deductible: 250,
            dealershipId: 'DEAL001', dealershipName: 'AutoWorld Motors', notes: 'Cancelled due to vehicle sale.'
        },
    ];

    const dummyClaims = [
        {
            id: 'CLM001', contractId: 'VSC001', customerName: 'Alice Smith', vehicle: 'Toyota Camry 2020',
            claimDate: '2024-03-10', status: 'SUBMITTED', serviceCenter: 'Main Street Auto', repairCost: 850,
            notes: 'Engine diagnostic and minor repair.', estimatedCompletion: '2024-03-20'
        },
        {
            id: 'CLM002', contractId: 'VSC002', customerName: 'Bob Johnson', vehicle: 'Honda CRV 2022',
            claimDate: '2024-03-15', status: 'UNDER_REVIEW', serviceCenter: 'Premium Repair Co.', repairCost: 1200,
            notes: 'Transmission issue, awaiting inspection report.', estimatedCompletion: '2024-03-25'
        },
        {
            id: 'CLM003', contractId: 'VSC003', customerName: 'Charlie Brown', vehicle: 'Ford F-150 2019',
            claimDate: '2024-03-05', status: 'APPROVED', serviceCenter: 'Truck & SUV Service', repairCost: 500,
            notes: 'Brake pad replacement.', estimatedCompletion: '2024-03-10'
        },
        {
            id: 'CLM004', contractId: 'VSC004', customerName: 'Diana Prince', vehicle: 'Tesla Model 3 2021',
            claimDate: '2024-03-01', status: 'REJECTED', serviceCenter: 'EV Repair Hub', repairCost: 200,
            notes: 'Claim rejected: contract expired.', estimatedCompletion: 'N/A'
        },
        {
            id: 'CLM005', contractId: 'VSC005', customerName: 'Eve Adams', vehicle: 'BMW X5 2020',
            claimDate: '2024-02-28', status: 'PAID', serviceCenter: 'Luxury Service Center', repairCost: 3500,
            notes: 'Major electrical repair.', estimatedCompletion: '2024-03-05'
        },
    ];

    const dummyCustomers = [
        { id: 'CUST001', name: 'Alice Smith', email: 'alice.smith@example.com', phone: '555-1001', address: '123 Oak Ave, Anytown, USA' },
        { id: 'CUST002', name: 'Bob Johnson', email: 'bob.j@example.com', phone: '555-1002', address: '456 Pine St, Anytown, USA' },
        { id: 'CUST003', name: 'Charlie Brown', email: 'charlie.b@example.com', phone: '555-1003', address: '789 Maple Ln, Anytown, USA' },
        { id: 'CUST004', name: 'Diana Prince', email: 'diana.p@example.com', phone: '555-1004', address: '101 Elm Dr, Anytown, USA' },
        { id: 'CUST005', name: 'Eve Adams', email: 'eve.a@example.com', phone: '555-1005', address: '202 Birch Rd, Anytown, USA' },
        { id: 'CUST006', name: 'Frank White', email: 'frank.w@example.com', phone: '555-1006', address: '303 Cedar Blvd, Anytown, USA' },
    ];

    const dummyDealerships = [
        { id: 'DEAL001', name: 'AutoWorld Motors', contactPerson: 'John Doe', phone: '555-2001', address: '100 Dealership Way, Metroville, USA' },
        { id: 'DEAL002', name: 'Luxury Auto Group', contactPerson: 'Jane Smith', phone: '555-2002', address: '200 Grand Blvd, Wealthton, USA' },
        { id: 'DEAL003', name: 'Future Ride EV', contactPerson: 'Peter Jones', phone: '555-2003', address: '300 Electric Ave, Green City, USA' },
        { id: 'DEAL004', name: 'City Car Sales', contactPerson: 'Sarah Lee', phone: '555-2004', address: '400 Main St, Suburbia, USA' },
        { id: 'DEAL005', name: 'Premium Trucks & More', contactPerson: 'Mike Ross', phone: '555-2005', address: '500 Highway Rd, Countryside, USA' },
    ];

    const [view, setView] = useState({ screen: 'DASHBOARD', params: {} });
    const [user, setUser] = useState({ name: 'F&I Product Manager', role: ROLES.FI_PRODUCT_MANAGER });
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({ status: 'ALL', startDate: '', endDate: '' });
    const [showFilterPanel, setShowFilterPanel] = useState(false);

    // Navigation and Routing
    const navigate = (screenName, params = {}) => {
        setView({ screen: screenName, params });
        setSearchTerm(''); // Clear search on navigation
        setFilters({ status: 'ALL', startDate: '', endDate: '' }); // Reset filters on navigation
        setShowFilterPanel(false); // Hide filter panel
    };

    const goBack = () => {
        // Simple history for this example, a real app would use a stack
        if (view.screen.includes('DETAIL')) {
            const listScreen = view.screen.replace('Detail', 'List');
            navigate(listScreen);
        } else {
            navigate('DASHBOARD'); // Fallback to dashboard
        }
    };

    const logout = () => {
        alert('Logging out...');
        // In a real app, this would clear authentication tokens and redirect to login
        setUser(null); // Simulate logging out
        setView({ screen: 'LOGIN' }); // Or a login screen
    };

    // Global Search Handler
    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    // Filter Handlers
    const handleFilterChange = (e) => {
        setFilters(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const applyFilters = () => {
        console.log('Applying filters:', filters);
        // Filtering logic is applied directly in the render for list screens
        setShowFilterPanel(false);
    };

    const clearFilters = () => {
        setFilters({ status: 'ALL', startDate: '', endDate: '' });
        setShowFilterPanel(false);
    };

    // Generic filtering function for lists
    const filterAndSearchData = (data, fieldsToSearch) => {
        let filtered = data;

        // Apply status filter
        if (filters.status !== 'ALL') {
            filtered = filtered.filter(item => item.status === filters.status);
        }

        // Apply date filters (assuming items have a 'date' or 'startDate' field)
        if (filters.startDate) {
            filtered = filtered.filter(item => (item.startDate || item.claimDate) >= filters.startDate);
        }
        if (filters.endDate) {
            filtered = filtered.filter(item => (item.endDate || item.claimDate) <= filters.endDate);
        }

        // Apply search term
        if (searchTerm) {
            filtered = filtered.filter(item =>
                fieldsToSearch.some(field =>
                    String(item?.[field] || '').toLowerCase().includes(searchTerm)
                )
            );
        }
        return filtered;
    };

    // Breadcrumbs Helper
    const getBreadcrumbs = () => {
        const path = [{ label: 'Dashboard', screen: 'DASHBOARD' }];
        switch (view.screen) {
            case 'CONTRACTS_LIST': path.push({ label: 'Vehicle Service Contracts', screen: 'CONTRACTS_LIST' }); break;
            case 'CONTRACTS_DETAIL':
                path.push({ label: 'Vehicle Service Contracts', screen: 'CONTRACTS_LIST' });
                path.push({ label: `Contract ${view.params.id}`, screen: 'CONTRACTS_DETAIL', active: true });
                break;
            case 'CLAIMS_LIST': path.push({ label: 'Claims', screen: 'CLAIMS_LIST' }); break;
            case 'CLAIMS_DETAIL':
                path.push({ label: 'Claims', screen: 'CLAIMS_LIST' });
                path.push({ label: `Claim ${view.params.id}`, screen: 'CLAIMS_DETAIL', active: true });
                break;
            case 'CUSTOMERS_LIST': path.push({ label: 'Customers', screen: 'CUSTOMERS_LIST' }); break;
            case 'CUSTOMERS_DETAIL':
                path.push({ label: 'Customers', screen: 'CUSTOMERS_LIST' });
                path.push({ label: `Customer ${view.params.id}`, screen: 'CUSTOMERS_DETAIL', active: true });
                break;
            case 'DEALERSHIPS_LIST': path.push({ label: 'Dealerships', screen: 'DEALERSHIPS_LIST' }); break;
            case 'DEALERSHIPS_DETAIL':
                path.push({ label: 'Dealerships', screen: 'DEALERSHIPS_LIST' });
                path.push({ label: `Dealership ${view.params.id}`, screen: 'DEALERSHIPS_DETAIL', active: true });
                break;
            case 'REPORTS': path.push({ label: 'Reports', screen: 'REPORTS', active: true }); break;
            case 'SETTINGS': path.push({ label: 'Settings', screen: 'SETTINGS', active: true }); break;
            default: break;
        }
        return path;
    };

    // --- Screen Components ---

    const DashboardScreen = () => {
        const totalContracts = dummyContracts.length;
        const activeContracts = dummyContracts.filter(c => c.status === 'ACTIVE').length;
        const pendingClaims = dummyClaims.filter(c => c.status === 'SUBMITTED' || c.status === 'UNDER_REVIEW').length;
        const totalCustomers = dummyCustomers.length;

        const recentActivities = [
            ...dummyContracts.map(c => ({ ...c, type: 'Contract', date: c.startDate })),
            ...dummyClaims.map(cl => ({ ...cl, type: 'Claim', date: cl.claimDate })),
        ].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);

        return (
            <div style={{ padding: 'var(--spacing-lg)' }}>
                <h1>Dashboard</h1>

                <div className="kpi-grid">
                    <PulseEffect>
                        <div className="kpi-card" onClick={() => navigate('CONTRACTS_LIST')}>
                            <h3>Total Contracts</h3>
                            <div className="value">{totalContracts}</div>
                            <div className="change positive">+5% last month</div>
                        </div>
                    </PulseEffect>
                    <PulseEffect>
                        <div className="kpi-card" onClick={() => navigate('CONTRACTS_LIST', { status: 'ACTIVE' })}>
                            <h3>Active Contracts</h3>
                            <div className="value">{activeContracts}</div>
                            <div className="change positive">+2% last month</div>
                        </div>
                    </PulseEffect>
                    <PulseEffect>
                        <div className="kpi-card" onClick={() => navigate('CLAIMS_LIST', { status: 'PENDING_APPROVAL' })}>
                            <h3>Pending Claims</h3>
                            <div className="value">{pendingClaims}</div>
                            <div className="change negative">-1 last week</div>
                        </div>
                    </PulseEffect>
                    <PulseEffect>
                        <div className="kpi-card" onClick={() => navigate('CUSTOMERS_LIST')}>
                            <h3>Total Customers</h3>
                            <div className="value">{totalCustomers}</div>
                            <div className="change positive">+10 last month</div>
                        </div>
                    </PulseEffect>
                </div>

                <div className="charts-container">
                    <PulseEffect>
                        <div className="chart-container">
                            <h4>Contracts by Status (Donut Chart)</h4>
                            <p>Visualization Placeholder</p>
                        </div>
                    </PulseEffect>
                    <PulseEffect>
                        <div className="chart-container">
                            <h4>Claims Trend (Line Chart)</h4>
                            <p>Visualization Placeholder</p>
                        </div>
                    </PulseEffect>
                </div>

                <div className="recent-activities">
                    <h3>Recent Activities</h3>
                    <div className="card-grid">
                        {recentActivities.map(item => (
                            <div
                                key={`${item.type}-${item.id}`}
                                className="card"
                                data-status={item.status}
                                onClick={() => navigate(
                                    item.type === 'Contract' ? 'CONTRACTS_DETAIL' : 'CLAIMS_DETAIL',
                                    { id: item.id }
                                )}
                            >
                                <div className="card-content">
                                    <div className="card-title">{item.type === 'Contract' ? `Contract #${item.id}` : `Claim #${item.id}`}</div>
                                    <div className="card-meta">
                                        {item.type === 'Contract' ? `Customer: ${item.customerName}` : `Vehicle: ${item.vehicle}`}
                                    </div>
                                    <div className="card-meta">
                                        Date: {item.date}
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <span className="card-status">{STATUS_LABELS[item.status]}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    const ContractsListScreen = () => {
        const filteredContracts = filterAndSearchData(dummyContracts, ['id', 'customerName', 'vehicle', 'planType', 'status']);

        const handleExport = () => alert('Exporting Contracts to PDF/Excel...');
        const handleBulkAction = () => alert('Performing bulk action on selected contracts...');
        const handleCreateContract = () => alert('Opening form to create new contract...');

        return (
            <div style={{ padding: 'var(--spacing-lg)' }}>
                <h2>Vehicle Service Contracts</h2>

                <div className="list-controls">
                    <div className="global-search" style={{ width: 'auto' }}>
                        <SearchIcon />
                        <input
                            type="text"
                            placeholder="Search contracts..."
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="list-actions">
                        <button className="button button-secondary" onClick={() => setShowFilterPanel(prev => !prev)}>
                            <FilterIcon /> Filters
                        </button>
                        <button className="button button-secondary" onClick={handleExport}>
                            <ExportIcon /> Export
                        </button>
                        {(user.role === ROLES.FI_PRODUCT_MANAGER || user.role === ROLES.DEALERSHIP_PORTAL_USER) && (
                            <button className="button button-primary" onClick={handleCreateContract}>
                                <PlusIcon /> Create Contract
                            </button>
                        )}
                        {/* Example of a bulk action, typically needs selection */}
                        {user.role === ROLES.FI_PRODUCT_MANAGER && (
                            <button className="button button-primary" onClick={handleBulkAction}>
                                Bulk Approve
                            </button>
                        )}
                    </div>
                </div>

                {showFilterPanel && (
                    <div className="filter-panel">
                        <div className="filter-group">
                            <label htmlFor="status-filter">Status:</label>
                            <select id="status-filter" name="status" value={filters.status} onChange={handleFilterChange}>
                                <option value="ALL">All</option>
                                {Object.keys(STATUS_LABELS).map(statusKey => (
                                    statusKey.startsWith('ACTIVE') || statusKey.startsWith('PENDING') || statusKey.startsWith('EXPIRED') || statusKey.startsWith('CANCELLED') ?
                                        <option key={statusKey} value={statusKey}>{STATUS_LABELS[statusKey]}</option> : null
                                ))}
                            </select>
                        </div>
                        <div className="filter-group">
                            <label htmlFor="start-date-filter">Start Date From:</label>
                            <input type="date" id="start-date-filter" name="startDate" value={filters.startDate} onChange={handleFilterChange} />
                        </div>
                        <div className="filter-group">
                            <label htmlFor="end-date-filter">End Date To:</label>
                            <input type="date" id="end-date-filter" name="endDate" value={filters.endDate} onChange={handleFilterChange} />
                        </div>
                        <div className="filter-panel-buttons">
                            <button className="button button-secondary" onClick={clearFilters}>Clear</button>
                            <button className="button button-primary" onClick={applyFilters}>Apply Filters</button>
                        </div>
                    </div>
                )}

                <div className="card-grid" style={{ marginTop: 'var(--spacing-lg)' }}>
                    {filteredContracts.map(contract => (
                        <div
                            key={contract.id}
                            className="card"
                            data-status={contract.status}
                            onClick={() => navigate('CONTRACTS_DETAIL', { id: contract.id })}
                            style={{ position: 'relative' }}
                        >
                            <div className="card-content">
                                <div className="card-title">Contract #{contract.id}</div>
                                <div className="card-meta">Customer: {contract.customerName}</div>
                                <div className="card-meta">Vehicle: {contract.vehicle}</div>
                                <div className="card-meta">Plan: {contract.planType}</div>
                            </div>
                            <div className="card-footer">
                                <span className="card-status">{STATUS_LABELS[contract.status]}</span>
                                {(user.role === ROLES.FI_PRODUCT_MANAGER || user.role === ROLES.DEALERSHIP_PORTAL_USER) && (
                                    <div className="card-actions" style={{ position: 'absolute', right: 'var(--spacing-md)', top: 'var(--spacing-md)', opacity: 0, transition: 'opacity var(--transition-speed) ease' }}>
                                        <button className="button button-ghost" onClick={(e) => { e.stopPropagation(); alert(`Edit ${contract.id}`); }}><EditIcon /></button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const ContractDetailScreen = () => {
        const contract = dummyContracts.find(c => c.id === view.params.id);

        if (!contract) return <NotFoundScreen />;

        const handleEdit = () => alert(`Editing contract ${contract?.id}`);
        const handleRenew = () => alert(`Renewing contract ${contract?.id}`);
        const handleCancel = () => alert(`Cancelling contract ${contract?.id}`);
        const handleAuditLog = () => alert(`Viewing audit log for contract ${contract?.id}`);

        return (
            <div className="detail-container">
                <div className="detail-header">
                    <h2>Contract #{contract?.id} Details</h2>
                    <div className="detail-actions">
                        {(user.role === ROLES.FI_PRODUCT_MANAGER || user.role === ROLES.DEALERSHIP_PORTAL_USER) && (
                            <>
                                <button className="button button-secondary" onClick={handleEdit}><EditIcon /> Edit Contract</button>
                                {contract?.status !== 'CANCELLED' && contract?.status !== 'EXPIRED' && (
                                    <button className="button button-primary" onClick={handleRenew}>Renew</button>
                                )}
                                {(contract?.status === 'ACTIVE' || contract?.status === 'PENDING_APPROVAL') && (
                                    <button className="button button-danger" onClick={handleCancel}>Cancel</button>
                                )}
                            </>
                        )}
                    </div>
                </div>

                <div className="detail-status-badge" style={{ backgroundColor: STATUS_COLORS[contract?.status || 'INITIATED'], marginBottom: 'var(--spacing-md)' }}>
                    Status: {STATUS_LABELS[contract?.status || 'INITIATED']}
                </div>

                <div className="detail-section">
                    <h3>Contract Information</h3>
                    <div className="detail-item">
                        <span className="detail-item-label">Plan Type:</span>
                        <span className="detail-item-value">{contract?.planType}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-item-label">Start Date:</span>
                        <span className="detail-item-value">{contract?.startDate}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-item-label">End Date:</span>
                        <span className="detail-item-value">{contract?.endDate}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-item-label">Premium:</span>
                        <span className="detail-item-value">${contract?.premium?.toFixed(2)}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-item-label">Deductible:</span>
                        <span className="detail-item-value">${contract?.deductible?.toFixed(2)}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-item-label">Notes:</span>
                        <span className="detail-item-value">{contract?.notes}</span>
                    </div>
                </div>

                <div className="detail-section">
                    <h3>Customer Information</h3>
                    <div className="detail-item">
                        <span className="detail-item-label">Customer Name:</span>
                        <a href="#" onClick={() => navigate('CUSTOMERS_DETAIL', { id: contract?.customerId })} className="detail-item-value">{contract?.customerName}</a>
                    </div>
                    <div className="detail-item">
                        <span className="detail-item-label">Vehicle:</span>
                        <span className="detail-item-value">{contract?.vehicle}</span>
                    </div>
                </div>

                <div className="detail-section">
                    <h3>Dealership Information</h3>
                    <div className="detail-item">
                        <span className="detail-item-label">Dealership Name:</span>
                        <a href="#" onClick={() => navigate('DEALERSHIPS_DETAIL', { id: contract?.dealershipId })} className="detail-item-value">{contract?.dealershipName}</a>
                    </div>
                </div>

                <div className="detail-section">
                    <h3>Related Claims</h3>
                    <div className="card-grid" style={{ gridTemplateColumns: '1fr' }}>
                        {dummyClaims.filter(claim => claim.contractId === contract?.id).map(claim => (
                            <div
                                key={claim.id}
                                className="card"
                                data-status={claim.status}
                                onClick={() => navigate('CLAIMS_DETAIL', { id: claim.id })}
                            >
                                <div className="card-title">Claim #{claim.id}</div>
                                <div className="card-meta">Service Center: {claim.serviceCenter}</div>
                                <div className="card-meta">Claim Date: {claim.claimDate}</div>
                                <div className="card-footer">
                                    <span className="card-status">{STATUS_LABELS[claim.status]}</span>
                                    <span>Cost: ${claim.repairCost?.toFixed(2)}</span>
                                </div>
                            </div>
                        ))}
                        {dummyClaims.filter(claim => claim.contractId === contract?.id).length === 0 && (
                            <p style={{ color: 'var(--color-text-light)' }}>No claims found for this contract.</p>
                        )}
                    </div>
                </div>

                {(user.role === ROLES.FI_PRODUCT_MANAGER || user.role === ROLES.SYSTEM_ARCHITECT) && (
                    <div className="detail-section">
                        <h3>Audit Log</h3>
                        <button className="button button-ghost" onClick={handleAuditLog}>View Full Audit Log</button>
                        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-light)', marginTop: 'var(--spacing-xs)' }}>
                            <small>Only visible to authorized roles.</small>
                        </p>
                    </div>
                )}
            </div>
        );
    };

    const ClaimsListScreen = () => {
        const filteredClaims = filterAndSearchData(dummyClaims, ['id', 'customerName', 'vehicle', 'serviceCenter', 'status']);

        const handleExport = () => alert('Exporting Claims to PDF/Excel...');
        const handleCreateClaim = () => alert('Opening form to create new claim...');

        return (
            <div style={{ padding: 'var(--spacing-lg)' }}>
                <h2>Claims</h2>

                <div className="list-controls">
                    <div className="global-search" style={{ width: 'auto' }}>
                        <SearchIcon />
                        <input
                            type="text"
                            placeholder="Search claims..."
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="list-actions">
                        <button className="button button-secondary" onClick={() => setShowFilterPanel(prev => !prev)}>
                            <FilterIcon /> Filters
                        </button>
                        <button className="button button-secondary" onClick={handleExport}>
                            <ExportIcon /> Export
                        </button>
                        {(user.role === ROLES.CUSTOMER_SERVICE_REP || user.role === ROLES.DEALERSHIP_PORTAL_USER || user.role === ROLES.VEHICLE_OWNER) && (
                            <button className="button button-primary" onClick={handleCreateClaim}>
                                <PlusIcon /> File New Claim
                            </button>
                        )}
                    </div>
                </div>

                {showFilterPanel && (
                    <div className="filter-panel">
                        <div className="filter-group">
                            <label htmlFor="status-filter">Status:</label>
                            <select id="status-filter" name="status" value={filters.status} onChange={handleFilterChange}>
                                <option value="ALL">All</option>
                                {Object.keys(STATUS_LABELS).map(statusKey => (
                                    statusKey.startsWith('SUBMITTED') || statusKey.startsWith('UNDER_REVIEW') || statusKey.startsWith('APPROVED') || statusKey.startsWith('REJECTED') || statusKey.startsWith('PAID') ?
                                        <option key={statusKey} value={statusKey}>{STATUS_LABELS[statusKey]}</option> : null
                                ))}
                            </select>
                        </div>
                        <div className="filter-group">
                            <label htmlFor="start-date-filter">Claim Date From:</label>
                            <input type="date" id="start-date-filter" name="startDate" value={filters.startDate} onChange={handleFilterChange} />
                        </div>
                        <div className="filter-group">
                            <label htmlFor="end-date-filter">Claim Date To:</label>
                            <input type="date" id="end-date-filter" name="endDate" value={filters.endDate} onChange={handleFilterChange} />
                        </div>
                        <div className="filter-panel-buttons">
                            <button className="button button-secondary" onClick={clearFilters}>Clear</button>
                            <button className="button button-primary" onClick={applyFilters}>Apply Filters</button>
                        </div>
                    </div>
                )}

                <div className="card-grid" style={{ marginTop: 'var(--spacing-lg)' }}>
                    {filteredClaims.map(claim => (
                        <div
                            key={claim.id}
                            className="card"
                            data-status={claim.status}
                            onClick={() => navigate('CLAIMS_DETAIL', { id: claim.id })}
                            style={{ position: 'relative' }}
                        >
                            <div className="card-title">Claim #{claim.id}</div>
                            <div className="card-meta">Customer: {claim.customerName}</div>
                            <div className="card-meta">Vehicle: {claim.vehicle}</div>
                            <div className="card-meta">Service Center: {claim.serviceCenter}</div>
                            <div className="card-footer">
                                <span className="card-status">{STATUS_LABELS[claim.status]}</span>
                                {(user.role === ROLES.CUSTOMER_SERVICE_REP) && (
                                    <div className="card-actions" style={{ position: 'absolute', right: 'var(--spacing-md)', top: 'var(--spacing-md)', opacity: 0, transition: 'opacity var(--transition-speed) ease' }}>
                                        <button className="button button-ghost" onClick={(e) => { e.stopPropagation(); alert(`Process Claim ${claim.id}`); }}>Process</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const ClaimDetailScreen = () => {
        const claim = dummyClaims.find(c => c.id === view.params.id);
        const contract = dummyContracts.find(c => c.id === claim?.contractId);

        if (!claim) return <NotFoundScreen />;

        const handleApprove = () => alert(`Approving claim ${claim?.id}`);
        const handleReject = () => alert(`Rejecting claim ${claim?.id}`);
        const handleProcessPayment = () => alert(`Processing payment for claim ${claim?.id}`);
        const handleEditClaim = () => alert(`Editing claim ${claim?.id}`);

        return (
            <div className="detail-container">
                <div className="detail-header">
                    <h2>Claim #{claim?.id} Details</h2>
                    <div className="detail-actions">
                        {(user.role === ROLES.FI_PRODUCT_MANAGER || user.role === ROLES.CUSTOMER_SERVICE_REP) && (
                            <>
                                {claim?.status === 'SUBMITTED' || claim?.status === 'UNDER_REVIEW' ? (
                                    <>
                                        <button className="button button-primary" onClick={handleApprove}>Approve</button>
                                        <button className="button button-danger" onClick={handleReject}>Reject</button>
                                    </>
                                ) : claim?.status === 'APPROVED' ? (
                                    <button className="button button-primary" onClick={handleProcessPayment}>Process Payment</button>
                                ) : null}
                                <button className="button button-secondary" onClick={handleEditClaim}><EditIcon /> Edit Claim</button>
                            </>
                        )}
                    </div>
                </div>

                <div className="detail-status-badge" style={{ backgroundColor: STATUS_COLORS[claim?.status || 'INITIATED'], marginBottom: 'var(--spacing-md)' }}>
                    Status: {STATUS_LABELS[claim?.status || 'INITIATED']}
                </div>

                <div className="detail-section">
                    <h3>Claim Information</h3>
                    <div className="detail-item">
                        <span className="detail-item-label">Claim Date:</span>
                        <span className="detail-item-value">{claim?.claimDate}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-item-label">Service Center:</span>
                        <span className="detail-item-value">{claim?.serviceCenter}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-item-label">Repair Cost:</span>
                        <span className="detail-item-value">${claim?.repairCost?.toFixed(2)}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-item-label">Estimated Completion:</span>
                        <span className="detail-item-value">{claim?.estimatedCompletion}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-item-label">Notes:</span>
                        <span className="detail-item-value">{claim?.notes}</span>
                    </div>
                </div>

                <div className="detail-section">
                    <h3>Related Contract</h3>
                    {contract ? (
                        <div className="card-grid" style={{ gridTemplateColumns: '1fr' }}>
                            <div
                                key={contract.id}
                                className="card"
                                data-status={contract.status}
                                onClick={() => navigate('CONTRACTS_DETAIL', { id: contract.id })}
                            >
                                <div className="card-title">Contract #{contract.id}</div>
                                <div className="card-meta">Customer: {contract.customerName}</div>
                                <div className="card-meta">Vehicle: {contract.vehicle}</div>
                                <div className="card-footer">
                                    <span className="card-status">{STATUS_LABELS[contract.status]}</span>
                                    <span>Plan: {contract.planType}</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p style={{ color: 'var(--color-text-light)' }}>No related contract found.</p>
                    )}
                </div>
            </div>
        );
    };

    const CustomersListScreen = () => {
        const filteredCustomers = filterAndSearchData(dummyCustomers, ['id', 'name', 'email', 'phone', 'address']);

        const handleExport = () => alert('Exporting Customers to PDF/Excel...');
        const handleCreateCustomer = () => alert('Opening form to create new customer...');

        return (
            <div style={{ padding: 'var(--spacing-lg)' }}>
                <h2>Customers</h2>

                <div className="list-controls">
                    <div className="global-search" style={{ width: 'auto' }}>
                        <SearchIcon />
                        <input
                            type="text"
                            placeholder="Search customers..."
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="list-actions">
                        <button className="button button-secondary" onClick={handleExport}>
                            <ExportIcon /> Export
                        </button>
                        {(user.role === ROLES.DEALERSHIP_PORTAL_USER || user.role === ROLES.CUSTOMER_SERVICE_REP) && (
                            <button className="button button-primary" onClick={handleCreateCustomer}>
                                <PlusIcon /> Add Customer
                            </button>
                        )}
                    </div>
                </div>

                <div className="card-grid" style={{ marginTop: 'var(--spacing-lg)' }}>
                    {filteredCustomers.map(customer => (
                        <div
                            key={customer.id}
                            className="card"
                            onClick={() => navigate('CUSTOMERS_DETAIL', { id: customer.id })}
                            style={{ borderLeftColor: 'var(--color-primary)' }} // Generic color for customer cards
                        >
                            <div className="card-title">{customer.name} ({customer.id})</div>
                            <div className="card-meta">{customer.email}</div>
                            <div className="card-meta">{customer.phone}</div>
                            <div className="card-footer">
                                <span>{customer.address.split(',')[0]}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const CustomerDetailScreen = () => {
        const customer = dummyCustomers.find(c => c.id === view.params.id);

        if (!customer) return <NotFoundScreen />;

        const handleEdit = () => alert(`Editing customer ${customer?.id}`);

        return (
            <div className="detail-container">
                <div className="detail-header">
                    <h2>Customer #{customer?.id} Details</h2>
                    {(user.role === ROLES.DEALERSHIP_PORTAL_USER || user.role === ROLES.CUSTOMER_SERVICE_REP) && (
                        <button className="button button-secondary" onClick={handleEdit}><EditIcon /> Edit Customer</button>
                    )}
                </div>

                <div className="detail-section">
                    <h3>Personal Information</h3>
                    <div className="detail-item">
                        <span className="detail-item-label">Name:</span>
                        <span className="detail-item-value">{customer?.name}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-item-label">Email:</span>
                        <span className="detail-item-value">{customer?.email}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-item-label">Phone:</span>
                        <span className="detail-item-value">{customer?.phone}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-item-label">Address:</span>
                        <span className="detail-item-value">{customer?.address}</span>
                    </div>
                </div>

                <div className="detail-section">
                    <h3>Associated Contracts</h3>
                    <div className="card-grid" style={{ gridTemplateColumns: '1fr' }}>
                        {dummyContracts.filter(contract => contract.customerId === customer?.id).map(contract => (
                            <div
                                key={contract.id}
                                className="card"
                                data-status={contract.status}
                                onClick={() => navigate('CONTRACTS_DETAIL', { id: contract.id })}
                            >
                                <div className="card-title">Contract #{contract.id}</div>
                                <div className="card-meta">Vehicle: {contract.vehicle}</div>
                                <div className="card-meta">Plan: {contract.planType}</div>
                                <div className="card-footer">
                                    <span className="card-status">{STATUS_LABELS[contract.status]}</span>
                                    <span>Expires: {contract.endDate}</span>
                                </div>
                            </div>
                        ))}
                        {dummyContracts.filter(contract => contract.customerId === customer?.id).length === 0 && (
                            <p style={{ color: 'var(--color-text-light)' }}>No contracts found for this customer.</p>
                        )}
                    </div>
                </div>

                <div className="detail-section">
                    <h3>Associated Claims</h3>
                    <div className="card-grid" style={{ gridTemplateColumns: '1fr' }}>
                        {dummyClaims.filter(claim => claim.customerId === customer?.id).map(claim => (
                            <div
                                key={claim.id}
                                className="card"
                                data-status={claim.status}
                                onClick={() => navigate('CLAIMS_DETAIL', { id: claim.id })}
                            >
                                <div className="card-title">Claim #{claim.id}</div>
                                <div className="card-meta">Vehicle: {claim.vehicle}</div>
                                <div className="card-meta">Claim Date: {claim.claimDate}</div>
                                <div className="card-footer">
                                    <span className="card-status">{STATUS_LABELS[claim.status]}</span>
                                    <span>Cost: ${claim.repairCost?.toFixed(2)}</span>
                                </div>
                            </div>
                        ))}
                        {dummyClaims.filter(claim => claim.customerId === customer?.id).length === 0 && (
                            <p style={{ color: 'var(--color-text-light)' }}>No claims found for this customer.</p>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    const DealershipsListScreen = () => {
        const filteredDealerships = filterAndSearchData(dummyDealerships, ['id', 'name', 'contactPerson', 'phone', 'address']);

        const handleExport = () => alert('Exporting Dealerships to PDF/Excel...');
        const handleCreateDealership = () => alert('Opening form to add new dealership...');

        return (
            <div style={{ padding: 'var(--spacing-lg)' }}>
                <h2>Dealerships</h2>

                <div className="list-controls">
                    <div className="global-search" style={{ width: 'auto' }}>
                        <SearchIcon />
                        <input
                            type="text"
                            placeholder="Search dealerships..."
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="list-actions">
                        <button className="button button-secondary" onClick={handleExport}>
                            <ExportIcon /> Export
                        </button>
                        {(user.role === ROLES.FI_PRODUCT_MANAGER) && (
                            <button className="button button-primary" onClick={handleCreateDealership}>
                                <PlusIcon /> Add Dealership
                            </button>
                        )}
                    </div>
                </div>

                <div className="card-grid" style={{ marginTop: 'var(--spacing-lg)' }}>
                    {filteredDealerships.map(dealership => (
                        <div
                            key={dealership.id}
                            className="card"
                            onClick={() => navigate('DEALERSHIPS_DETAIL', { id: dealership.id })}
                            style={{ borderLeftColor: 'var(--color-secondary)' }}
                        >
                            <div className="card-title">{dealership.name} ({dealership.id})</div>
                            <div className="card-meta">Contact: {dealership.contactPerson}</div>
                            <div className="card-meta">Phone: {dealership.phone}</div>
                            <div className="card-footer">
                                <span>{dealership.address.split(',')[0]}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const DealershipDetailScreen = () => {
        const dealership = dummyDealerships.find(d => d.id === view.params.id);

        if (!dealership) return <NotFoundScreen />;

        const handleEdit = () => alert(`Editing dealership ${dealership?.id}`);

        return (
            <div className="detail-container">
                <div className="detail-header">
                    <h2>Dealership #{dealership?.id} Details</h2>
                    {(user.role === ROLES.FI_PRODUCT_MANAGER) && (
                        <button className="button button-secondary" onClick={handleEdit}><EditIcon /> Edit Dealership</button>
                    )}
                </div>

                <div className="detail-section">
                    <h3>Dealership Information</h3>
                    <div className="detail-item">
                        <span className="detail-item-label">Name:</span>
                        <span className="detail-item-value">{dealership?.name}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-item-label">Contact Person:</span>
                        <span className="detail-item-value">{dealership?.contactPerson}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-item-label">Phone:</span>
                        <span className="detail-item-value">{dealership?.phone}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-item-label">Address:</span>
                        <span className="detail-item-value">{dealership?.address}</span>
                    </div>
                </div>

                <div className="detail-section">
                    <h3>Associated Contracts</h3>
                    <div className="card-grid" style={{ gridTemplateColumns: '1fr' }}>
                        {dummyContracts.filter(contract => contract.dealershipId === dealership?.id).map(contract => (
                            <div
                                key={contract.id}
                                className="card"
                                data-status={contract.status}
                                onClick={() => navigate('CONTRACTS_DETAIL', { id: contract.id })}
                            >
                                <div className="card-title">Contract #{contract.id}</div>
                                <div className="card-meta">Customer: {contract.customerName}</div>
                                <div className="card-meta">Vehicle: {contract.vehicle}</div>
                                <div className="card-footer">
                                    <span className="card-status">{STATUS_LABELS[contract.status]}</span>
                                    <span>Plan: {contract.planType}</span>
                                </div>
                            </div>
                        ))}
                        {dummyContracts.filter(contract => contract.dealershipId === dealership?.id).length === 0 && (
                            <p style={{ color: 'var(--color-text-light)' }}>No contracts found for this dealership.</p>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    const ReportsScreen = () => (
        <div style={{ padding: 'var(--spacing-lg)' }}>
            <h2>Reports & Analytics</h2>
            <p>Here you can find various reports and dashboards related to VSC performance, claims trends, customer demographics, and dealership sales.</p>
            <div className="charts-container" style={{ marginTop: 'var(--spacing-xl)' }}>
                <div className="chart-container">
                    <h4>Contracts Sold by Dealership (Bar Chart)</h4>
                    <p>Visualization Placeholder</p>
                    <button className="button button-ghost" style={{ marginTop: 'var(--spacing-md)' }} onClick={() => alert('Exporting chart...')}>Export Chart</button>
                </div>
                <div className="chart-container">
                    <h4>Claim Adjudication Time (Gauge Chart)</h4>
                    <p>Visualization Placeholder</p>
                    <button className="button button-ghost" style={{ marginTop: 'var(--spacing-md)' }} onClick={() => alert('Exporting chart...')}>Export Chart</button>
                </div>
                <div className="chart-container">
                    <h4>Historical Contract Volume (Line Chart)</h4>
                    <p>Visualization Placeholder</p>
                    <button className="button button-ghost" style={{ marginTop: 'var(--spacing-md)' }} onClick={() => alert('Exporting chart...')}>Export Chart</button>
                </div>
            </div>
            <div style={{ marginTop: 'var(--spacing-xl)' }}>
                <h3>Export Options</h3>
                <button className="button button-primary" style={{ marginRight: 'var(--spacing-md)' }} onClick={() => alert('Exporting all dashboards to PDF...')}>Export All Dashboards (PDF)</button>
                <button className="button button-primary" onClick={() => alert('Exporting all reports to Excel...')}>Export All Reports (Excel)</button>
            </div>
        </div>
    );

    const SettingsScreen = () => (
        <div style={{ padding: 'var(--spacing-lg)' }}>
            <h2>Settings</h2>
            <p>Manage application settings, user profiles, notifications, and integrations.</p>
            <div className="card-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '600px' }}>
                <div className="card" onClick={() => alert('User Profile Settings')} style={{ borderLeftColor: 'var(--color-primary)' }}>
                    <div className="card-title">User Profile</div>
                    <div className="card-meta">Manage your personal information and preferences.</div>
                </div>
                {user.role === ROLES.FI_PRODUCT_MANAGER && (
                    <div className="card" onClick={() => alert('System Configuration')} style={{ borderLeftColor: 'var(--color-primary)' }}>
                        <div className="card-title">System Configuration</div>
                        <div className="card-meta">Configure global application settings.</div>
                    </div>
                )}
                {user.role === ROLES.FI_PRODUCT_MANAGER && (
                    <div className="card" onClick={() => alert('Role & Permissions Management')} style={{ borderLeftColor: 'var(--color-primary)' }}>
                        <div className="card-title">Role & Permissions</div>
                        <div className="card-meta">Manage user roles and access control.</div>
                    </div>
                )}
                <div className="card" onClick={() => alert('Notification Preferences')} style={{ borderLeftColor: 'var(--color-primary)' }}>
                    <div className="card-title">Notifications</div>
                    <div className="card-meta">Set up your notification preferences.</div>
                </div>
            </div>
        </div>
    );

    const NotFoundScreen = () => (
        <div style={{ padding: 'var(--spacing-lg)', textAlign: 'center' }}>
            <h2>404 - Page Not Found</h2>
            <p>The requested page could not be found. Please check the URL or return to the <a href="#" onClick={() => navigate('DASHBOARD')}>Dashboard</a>.</p>
        </div>
    );

    // Render the current screen based on the `view` state
    const renderScreen = () => {
        switch (view.screen) {
            case 'DASHBOARD': return <DashboardScreen />;
            case 'CONTRACTS_LIST': return <ContractsListScreen />;
            case 'CONTRACTS_DETAIL': return <ContractDetailScreen />;
            case 'CLAIMS_LIST': return <ClaimsListScreen />;
            case 'CLAIMS_DETAIL': return <ClaimDetailScreen />;
            case 'CUSTOMERS_LIST': return <CustomersListScreen />;
            case 'CUSTOMERS_DETAIL': return <CustomerDetailScreen />;
            case 'DEALERSHIPS_LIST': return <DealershipsListScreen />;
            case 'DEALERSHIPS_DETAIL': return <DealershipDetailScreen />;
            case 'REPORTS': return <ReportsScreen />;
            case 'SETTINGS': return <SettingsScreen />;
            default: return <NotFoundScreen />;
        }
    };

    if (!user) {
        // Simple login placeholder
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', flexDirection: 'column', backgroundColor: 'var(--color-background)' }}>
                <div style={{ backgroundColor: 'var(--color-card-bg)', padding: 'var(--spacing-xl)', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}>
                    <h1 style={{ marginBottom: 'var(--spacing-lg)' }}>VSC Application Login</h1>
                    <p style={{ marginBottom: 'var(--spacing-md)' }}>Simulating login as F&I Product Manager.</p>
                    <button className="button button-primary" onClick={() => setUser({ name: 'F&I Product Manager', role: ROLES.FI_PRODUCT_MANAGER })}>
                        Login as F&I Product Manager
                    </button>
                    {/* Add more login options for other roles if needed for demo */}
                </div>
            </div>
        );
    }

    const currentBreadcrumbs = getBreadcrumbs();

    return (
        <div className="app-container">
            <aside className="sidebar">
                <div>
                    <div className="sidebar-logo">VSC App</div>
                    <nav className="sidebar-nav">
                        <ul>
                            <li><a href="#" className={view.screen === 'DASHBOARD' ? 'active' : ''} onClick={() => navigate('DASHBOARD')}><DashboardIcon /> Dashboard</a></li>
                            <li><a href="#" className={view.screen.startsWith('CONTRACTS') ? 'active' : ''} onClick={() => navigate('CONTRACTS_LIST')}><ContractIcon /> Contracts</a></li>
                            <li><a href="#" className={view.screen.startsWith('CLAIMS') ? 'active' : ''} onClick={() => navigate('CLAIMS_LIST')}><ClaimIcon /> Claims</a></li>
                            <li><a href="#" className={view.screen.startsWith('CUSTOMERS') ? 'active' : ''} onClick={() => navigate('CUSTOMERS_LIST')}><CustomerIcon /> Customers</a></li>
                            <li><a href="#" className={view.screen.startsWith('DEALERSHIPS') ? 'active' : ''} onClick={() => navigate('DEALERSHIPS_LIST')}><DealershipIcon /> Dealerships</a></li>
                            {((user.role === ROLES.FI_PRODUCT_MANAGER) || (user.role === ROLES.SYSTEM_ARCHITECT)) && (
                                <li><a href="#" className={view.screen === 'REPORTS' ? 'active' : ''} onClick={() => navigate('REPORTS')}><ReportIcon /> Reports</a></li>
                            )}
                            <li><a href="#" className={view.screen === 'SETTINGS' ? 'active' : ''} onClick={() => navigate('SETTINGS')}><SettingsIcon /> Settings</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="sidebar-user-info">
                    <p>{user?.name}</p>
                    <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-light)' }}>{user?.role}</p>
                    <button className="sidebar-logout-btn" onClick={logout}>Logout</button>
                </div>
            </aside>

            <main className="main-content">
                <header className="header">
                    <div className="breadcrumbs">
                        {currentBreadcrumbs.map((crumb, index) => (
                            <React.Fragment key={crumb.label}>
                                {index > 0 && <span>/</span>}
                                {crumb.active ? (
                                    <strong>{crumb.label}</strong>
                                ) : (
                                    <a href="#" onClick={() => navigate(crumb.screen)}>{crumb.label}</a>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    {/* Global search is placed here as per requirement, but actual filtering is done by screen. */}
                    {/* The `searchTerm` state is shared but each screen decides what fields to apply it to. */}
                    {/* <div className="global-search">
                        <SearchIcon />
                        <input
                            type="text"
                            placeholder="Global search..."
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div> */}
                    {/* User profile could be here */}
                </header>
                <div className="page-content">
                    {renderScreen()}
                </div>
            </main>
        </div>
    );
};

export default App;