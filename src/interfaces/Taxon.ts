import { IRelationships } from './Relationships'
import { IQuery } from './Query'

export interface TaxonAttr extends IQuery {
  type: string
  id: string,
  attributes: {
    name: string
    pretty_name: string
    permalink: string
    seo_title: string
    meta_title: string
    meta_description: string
    meta_keywords: string
    left: number
    right: number
    position: number
    depth: number
    is_root: boolean
    is_child: boolean
    is_leaf: string
    updated_at: Date
  }

  relationships?: IRelationships
}

export interface ITaxon {
  data: TaxonAttr
}

export interface ITaxons {
  data: TaxonAttr[]
}
