// DOM Elements
const tableBody = document.getElementById('crypto-table-body');
const mobileNavber = document.querySelector('.-translate-x-full');
const toggleBtn = document.querySelector('#toggle');
const menuIcon = document.querySelector('.bi-list');

// mobile search dom variables
const mbSearch = document.getElementById('mb-search');
const mbOpenBtn = document.getElementById('mb-open');
const mbCloseBtn = document.getElementById('mb-close');


// buy modal functions
const buttons = document.querySelectorAll('.sol-values button');
const input = document.getElementById('sol-value-input');
const buyModalCloseBtn = document.getElementById('buyModal-close');
const buyModal = document.getElementById('buyModal')

buyModalCloseBtn.addEventListener('click', () => {
    buyModal.classList.add('hidden')
    buyModal.classList.remove('flex')
})

function openBuyModal() {
    buyModal.classList.remove('hidden')
    buyModal.classList.add('flex')
}

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Input qiymatini o'zgartirish
        input.value = btn.textContent;

        // Barcha buttonlardan active classni olib tashlash
        buttons.forEach(b => b.classList.remove('preset-btn-active'));

        // Bosilgan buttonga active classni qo‘shish
        btn.classList.add('preset-btn-active');
    });
});


input.addEventListener('keyup', () => {
    buttons.forEach(b => b.classList.remove('preset-btn-active'));
})



// mobile search open
mbOpenBtn.addEventListener('click', () => {
    mbSearch.classList.remove('-translate-y-full')
})

// mobile search close
mbCloseBtn.addEventListener('click', () => {
    mbSearch.classList.add('-translate-y-full')
})


// navbar toggle
toggleBtn.addEventListener('click', () => {
    mobileNavber.classList.toggle('-translate-x-full');
    menuIcon.classList.toggle('bi-x')
})


// Sample data for the cryptocurrency table
const cryptoData = [
    {
        icon: "/images/user.png",
        name: "$ITRUMP",
        pair: "SOL",
        hash: "HasM...JibH",
        created: "4s",
        liquidity: "412.22334",
        liquidityUsd: "$72K",
        liquidityChange: "+50%",
        marketCap: "$48.03K",
        marketCapPerToken: "$0.0448",
        txns: { buy: 1, sell: 0 },
        volume: "$12.2K",
        audit: {
            mintAuth: true,
            freezeAuth: true,
            lpBurned: true,
            top10Holders: true
        }
    },
    {
        icon: "/images/user.png",
        name: "$ITRUMP",
        pair: "SOL",
        hash: "HasM...JibH",
        created: "4s",
        liquidity: "412.22334",
        liquidityUsd: "$72K",
        liquidityChange: "+50%",
        marketCap: "$48.03K",
        marketCapPerToken: "$0.0448",
        txns: { buy: 1, sell: 0 },
        volume: "$12.2K",
        audit: {
            mintAuth: true,
            freezeAuth: true,
            lpBurned: true,
            top10Holders: true
        }
    },
    {
        icon: "/images/user.png",
        name: "$ITRUMP",
        pair: "SOL",
        hash: "HasM...JibH",
        created: "4s",
        liquidity: "412.22334",
        liquidityUsd: "$72K",
        liquidityChange: "+50%",
        marketCap: "$48.03K",
        marketCapPerToken: "$0.0448",
        txns: { buy: 1, sell: 0 },
        volume: "$12.2K",
        audit: {
            mintAuth: true,
            freezeAuth: true,
            lpBurned: true,
            top10Holders: true
        }
    },
    {
        icon: "/images/user.png",
        name: "$ITRUMP",
        pair: "SOL",
        hash: "HasM...JibH",
        created: "4s",
        liquidity: "412.22334",
        liquidityUsd: "$72K",
        liquidityChange: "+50%",
        marketCap: "$48.03K",
        marketCapPerToken: "$0.0448",
        txns: { buy: 1, sell: 0 },
        volume: "$12.2K",
        audit: {
            mintAuth: true,
            freezeAuth: true,
            lpBurned: true,
            top10Holders: true
        }
    },
    {
        icon: "/images/user.png",
        name: "$ITRUMP",
        pair: "SOL",
        hash: "HasM...JibH",
        created: "4s",
        liquidity: "412.22334",
        liquidityUsd: "$72K",
        liquidityChange: "+50%",
        marketCap: "$48.03K",
        marketCapPerToken: "$0.0448",
        txns: { buy: 1, sell: 0 },
        volume: "$12.2K",
        audit: {
            mintAuth: true,
            freezeAuth: true,
            lpBurned: true,
            top10Holders: true
        }
    },
    {
        icon: "/images/user.png",
        name: "$ITRUMP",
        pair: "SOL",
        hash: "HasM...JibH",
        created: "4s",
        liquidity: "412.22334",
        liquidityUsd: "$72K",
        liquidityChange: "+50%",
        marketCap: "$48.03K",
        marketCapPerToken: "$0.0448",
        txns: { buy: 1, sell: 0 },
        volume: "$12.2K",
        audit: {
            mintAuth: true,
            freezeAuth: true,
            lpBurned: true,
            top10Holders: true
        }
    },
    {
        icon: "/images/user.png",
        name: "$ITRUMP",
        pair: "SOL",
        hash: "HasM...JibH",
        created: "4s",
        liquidity: "412.22334",
        liquidityUsd: "$72K",
        liquidityChange: "+50%",
        marketCap: "$48.03K",
        marketCapPerToken: "$0.0448",
        txns: { buy: 1, sell: 0 },
        volume: "$12.2K",
        audit: {
            mintAuth: true,
            freezeAuth: true,
            lpBurned: true,
            top10Holders: true
        }
    },
    {
        icon: "/images/user.png",
        name: "$ITRUMP",
        pair: "SOL",
        hash: "HasM...JibH",
        created: "4s",
        liquidity: "412.22334",
        liquidityUsd: "$72K",
        liquidityChange: "+50%",
        marketCap: "$48.03K",
        marketCapPerToken: "$0.0448",
        txns: { buy: 1, sell: 0 },
        volume: "$12.2K",
        audit: {
            mintAuth: true,
            freezeAuth: true,
            lpBurned: true,
            top10Holders: true
        }
    },
    {
        icon: "/images/user.png",
        name: "$ITRUMP",
        pair: "SOL",
        hash: "HasM...JibH",
        created: "4s",
        liquidity: "412.22334",
        liquidityUsd: "$72K",
        liquidityChange: "+50%",
        marketCap: "$48.03K",
        marketCapPerToken: "$0.0448",
        txns: { buy: 1, sell: 0 },
        volume: "$12.2K",
        audit: {
            mintAuth: true,
            freezeAuth: true,
            lpBurned: true,
            top10Holders: true
        }
    },
];


function createAuditCell(title, subtitle = '') {
    return `
        <div class="audit-content">
            <i class="bi bi-check-circle audit-icon"></i>
            <div class="audit-text hidden md:block">${title}${subtitle ? `<br>${subtitle}` : ''}</div>
        </div>
    `;
}

function copyToClipboard(data) {
    window.navigator.clipboard.writeText(data);
}

/**
 * Renders the cryptocurrency table with data
 */
function renderTable() {
    tableBody.innerHTML = '';

    cryptoData.forEach(crypto => {
        const row = document.createElement('tr');
        row.className = 'table-row-interactive';

        row.innerHTML = `
            <!-- Pair Info Column -->
            <td class="table-cell-base sticky left-0 bg-background ">
                <div class="pair-info">
                    <img src="${crypto.icon}" alt="${crypto.name}" class="pair-icon">
                    <div>
                        <div class="pair-name">${crypto.name} <span class="text-header-text">/ ${crypto.pair}</span></div>
                        <div class="pair-hash">${crypto.hash} <i class="bi bi-clipboard ml-1"></i></div>
                    </div>
                </div>
            </td>

            <!-- Created Time Column -->
            <td class="table-cell-base">
                <div class="timestamp-info">
                    <i class="bi bi-clock timestamp-icon"></i>
                    <span>${crypto.created}</span>
                </div>
            </td>

            <!-- Liquidity Column -->
            <td class="table-cell-base">
                <div class="liquidity-info">
                    <div class="liquidity-row">
                        <img src='../images/table-logo.svg' />
                        <div class="liquidity-amount">
                            <span>${crypto.liquidity}</span> /
                            <span class="liquidity-usd">${crypto.liquidityUsd}</span>
                        </div>
                    </div>
                    <div class="text-xs text-success">${crypto.liquidityChange}</div>
                </div>
            </td>

            <!-- Market Cap Column -->
            <td class="table-cell-base">
                <div class="market-info">
                    <div>${crypto.marketCap}</div>
                    <div class="market-subtext">${crypto.marketCapPerToken}</div>
                </div>
            </td>

            <!-- Transactions Column -->
            <td class="table-cell-base">
                <div class="txn-info">
                    <div class="txn-count">${crypto.txns.buy}</div>
                    <div class="txn-details">
                        <span class="text-success">${crypto.txns.buy}</span>
                        <span>/</span> 
                        <span class="text-warning">${crypto.txns.sell}</span>
                    </div>
                </div>
            </td>

            <!-- Volume Column -->
            <td class="table-cell-base">
                <div class="volume-info">${crypto.volume}</div>
            </td>

            <!-- Audit Columns -->
            <td class="table-cell-compact audit-cell !border-none">
                ${createAuditCell('Mint Auth', 'Disabled')}
            </td>
            <td class="table-cell-compact audit-cell !border-none">
                ${createAuditCell('Freeze Auth', 'Disabled')}
            </td>
            <td class="table-cell-compact audit-cell !border-none">
                ${createAuditCell('LP', 'Burned')}
            </td>
            <td class="table-cell-compact audit-cell">
                ${createAuditCell('Top 10', 'Holders')}
            </td>
            
            <!-- Actions Column -->
            <td class="table-cell-base">
                <button onclick='openBuyModal()' class="btn-buy">
                    <span class="hidden md:inline-block">BUY <i class="bi bi-arrow-right ml-2"></i></span>
                    <i class="bi bi-lightning-charge-fill inline-block md:hidden"></i>
                </button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// Initialize table when the page loads
document.addEventListener('DOMContentLoaded', renderTable);