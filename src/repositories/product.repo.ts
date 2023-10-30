const fs = require('fs');
export class ProductRepository {
  /**
   * Get product stock.
   * @param hobbyId
   * @param user
   */
  async getProductStockBySku() {
    const rawData: any = fs.readFileSync('stock.json', 'utf8');
    const stock: any = JSON.parse(rawData);

    return stock;
  }

  /**
   * Get transaction data.
   * @param hobbyId
   * @param user
   */
  async getTrasactions() {
    const rawData: any = fs.readFileSync('transactions.json', 'utf8');
    const transactions: any = JSON.parse(rawData);

    return transactions;
  }
}
