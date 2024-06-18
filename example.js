// U5223-1368

function main() {
    d3.csv('data/purchase_orders.csv').then(function(data) {
        const ul = d3.select('#order-list');
        data.forEach(function(d) {
            ul.append('li')
              .text(`Customer Name: ${d.customerName} - Order ID: ${d.orderId} - Purchase Amount: ${d.purchaseAmount}`);
        });
    }).catch(function(error) {
        console.error('Error loading the CSV file:', error);
    });
}