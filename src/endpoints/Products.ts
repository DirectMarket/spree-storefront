import { GET } from '../constants'
import Http from '../Http'
import { IProductResult, IProductsResult } from '../interfaces/Product'
import { IQuery } from '../interfaces/Query'
import { IToken } from '../interfaces/Token'
import { Routes } from '../routes'

export default class Products extends Http {
  public async list(token: IToken, params: IQuery = {}): Promise<IProductsResult> {
    return await this.spreeResponse(GET, Routes.productsPath(), token, params) as IProductsResult
  }

  public async show(id: string, token: IToken, params: IQuery = {}): Promise<IProductResult> {
    return await this.spreeResponse(GET, Routes.productPath(id), token, params) as IProductResult
  }
}
