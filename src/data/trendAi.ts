import ana from '@/assets/avatars/ana.jpg'
import ben from '@/assets/avatars/ben.jpg'
import cara from '@/assets/avatars/cara.jpg'
import dev from '@/assets/avatars/dev.jpg'
import elin from '@/assets/avatars/elin.jpg'
import femi from '@/assets/avatars/femi.jpg'
import ownerAvatar from '@/assets/avatars/owner.png'
import sam from '@/assets/avatars/user-a.png'
import type { AvatarRef, ObjectProfile } from '@/types'

/*
 * People with a photo get one; the rest fall back to a letter on a solid fill,
 * and `Avatar` derives the colour from the name so it stays stable.
 */
const people = {
  ana: { name: 'Ana Ferreira', src: ana },
  ben: { name: 'Ben Okafor', src: ben },
  cara: { name: 'Cara Lindqvist', src: cara },
  dev: { name: 'Dev Raman', src: dev },
  elin: { name: 'Elin Sandberg', src: elin },
  femi: { name: 'Femi Adeyemi', src: femi },
  sam: { name: 'Sam Whitlock', src: sam },
  mick: { name: 'Mick', src: ownerAvatar },
  // Tones pinned to match the design; everyone else derives theirs from the name.
  zara: { name: 'Zara Haddad', tone: 'orange' },
  jonas: { name: 'Jonas Ek', tone: 'indigo' },
} satisfies Record<string, AvatarRef>

export const trendAi: ObjectProfile = {
  breadcrumb: 'Trend AI',
  name: 'Trend AI',
  healthScore: 8,
  fields: [
    { label: 'Owner:', value: { kind: 'person', person: people.mick } },
    { label: 'Phase', value: { kind: 'text', text: 'Adoption' } },
    { label: 'Attachments', value: { kind: 'tags', tags: ['2'] } },
    { label: 'ARR', value: { kind: 'text', text: '€13,800' } },
  ],
  description:
    'TrendAI is evaluating Planhat to consolidate customer success tooling across their scaled CS org. Rolled out to the EMEA pod in May; NA expansion is planned for Q3. Key stakeholders care about health visibility and renewal forecasting.',
  sessions: [
    {
      id: 'permissions',
      title: 'Update Agent Permissions',
      subtitle: 'Do you update the access for me?',
      participants: [people.zara],
      timeAgo: '19m ago',
      state: 'default',
    },
    {
      id: 'admin-demo',
      title: 'Demo for the Admins',
      subtitle: 'Updated and review before sending',
      participants: [people.ben, people.dev, people.femi],
      timeAgo: '21m ago',
      state: 'default',
    },
    {
      id: 'deal-review',
      title: 'Reviewing the on-going deal',
      // Long enough to clip in the preview track, as it does in the live UI.
      subtitle: 'Wondering if they make sense to display on the Profile',
      participants: [people.cara, people.elin],
      timeAgo: '31m ago',
      state: 'default',
    },
    {
      id: 'enablement-release',
      title: 'Product and Enablement Release',
      subtitle: 'Were you still planning on building any more dashboards?',
      participants: [people.ana, people.sam, people.ben],
      timeAgo: '37m ago',
      state: 'default',
    },
    {
      id: 'showcase',
      title: 'Showcasing what Trend AI can',
      subtitle: 'Sounds great!',
      participants: [people.elin, people.cara, people.jonas],
      timeAgo: '1h ago',
      state: 'default',
    },
  ],
  featuredPages: [
    {
      id: 'usage',
      name: 'Usage ',
      type: 'Dashboard',
      visibility: 'Everyone',
      updatedAgo: 'a day ago',
    },
    {
      id: 'deal-flow',
      name: 'Deal flow',
      type: 'Dashboard',
      visibility: 'Everyone',
      updatedAgo: '11 days ago',
    },
    {
      id: 'churn',
      name: 'Churn',
      type: 'Dashboard',
      visibility: 'Everyone',
      updatedAgo: '11 days ago',
    },
  ],
  tickets: [
    {
      id: 'profile-templates',
      title: '[TrenAI] Planhat Integration > Profile Template Sharing Disabled',
      description:
        'Trend AI integrates seamlessly with Planhat to provide real-time insights and predictive analytics for customer success teams.',
      combinedArr: '-',
    },
    {
      id: 'token-usage',
      title: '[TrenAI] Planhat Integration - Custom Model Token Usage Not Displayed',
      description:
        'The Trend AI dashboard in Planhat offers a clear overview of customer health trends and potential risks.',
      combinedArr: '-',
    },
    {
      id: 'scheduled-times',
      title: '[TrenAI] Planhat Integration - Scheduled Times and Roles Locked in Templates',
      description:
        'Users can bulk manage customer data and AI-driven recommendations within Planhat to streamline workflows and improve decision-making.',
      combinedArr: '-',
    },
    {
      id: 'sidebar-tools',
      title: '[TrenAI] Planhat Integration - Sidebar Tools and User Menu Reorganized',
      description:
        'This integration focuses on enhancing data connectivity and predictive capabilities without adding new manual inputs.',
      combinedArr: '-',
    },
    {
      id: 'agent-v3',
      title: '[TrenAI] Planhat Integration - Agent V3 Failure Analysis Backend Connected',
      description:
        "Trend AI supports analyzing customer engagement patterns by linking directly to Planhat's backend, enabling automated insights and actionable alerts.",
      combinedArr: '-',
    },
  ],
}
