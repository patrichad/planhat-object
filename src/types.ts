export type IconName =
  | 'add'
  | 'chevron-down'
  | 'chevron-small'
  | 'column-settings'
  | 'dots-horizontal'
  | 'grid'
  | 'link'
  | 'play'
  | 'plus'
  | 'row-expand'
  | 'x-close'

export type AvatarTone = 'orange' | 'moss' | 'indigo' | 'plum' | 'ruby' | 'bronze'

/**
 * A photo avatar, or a letter on a solid fill when there is no photo. Both the
 * letter and the tone are derived from `name` unless they are given explicitly.
 */
export interface AvatarRef {
  name: string
  src?: string
  initial?: string
  tone?: AvatarTone
}

/**
 * The value half of a field pill. The pill itself never inspects the value —
 * it renders whichever shape is supplied, which is what lets one component
 * cover text, people and tags.
 */
export type FieldValue =
  | { kind: 'text'; text: string }
  | { kind: 'person'; person: AvatarRef }
  | { kind: 'tags'; tags: string[] }

export interface Field {
  label: string
  value: FieldValue
}

export type SessionState = 'default'

export interface Session {
  id: string
  title: string
  subtitle: string
  participants: AvatarRef[]
  timeAgo: string
  state: SessionState
}

export interface FeaturedPage {
  id: string
  name: string
  type: string
  visibility: string
  updatedAgo: string
}

export interface Ticket {
  id: string
  title: string
  description: string
  /** Combined ARR (USD); em-dash in the design, so kept as a display string. */
  combinedArr: string
}

export interface ObjectProfile {
  breadcrumb: string
  name: string
  healthScore: number
  fields: Field[]
  description: string
  sessions: Session[]
  featuredPages: FeaturedPage[]
  tickets: Ticket[]
}
