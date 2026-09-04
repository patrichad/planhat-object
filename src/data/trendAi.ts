import ownerAvatar from '@/assets/avatars/owner.png'
import userAvatar from '@/assets/avatars/user-a.png'
import type { ObjectProfile } from '@/types'

const photo = (name: string) => ({ name, src: userAvatar })
const initial = (name: string, char: string) => ({
  name,
  initial: char,
  tone: 'orange' as const,
})

export const trendAi: ObjectProfile = {
  breadcrumb: 'Trend AI',
  name: 'Trend AI',
  healthScore: 8,
  fields: [
    { label: 'Owner:', value: { kind: 'person', person: { name: 'Mick', src: ownerAvatar } } },
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
      participants: [photo('Ana'), photo('Ben'), photo('Cara')],
      timeAgo: '21m ago',
      state: 'default',
    },
    {
      id: 'demo-1',
      title: 'Demo for the  Admins',
      subtitle: 'Updated and review before sending',
      participants: [photo('Ana'), photo('Ben'), photo('Cara')],
      timeAgo: '21m ago',
      state: 'default',
    },
    {
      id: 'demo-2',
      title: 'Demo for the  Admins',
      subtitle: 'Updated and review before sending',
      participants: [photo('Ana'), photo('Ben'), initial('Zara', 'Z')],
      timeAgo: '21m ago',
      state: 'default',
    },
    {
      id: 'demo-3',
      title: 'Demo for the  Admins',
      subtitle: 'Updated and review before sending',
      participants: [photo('Ana'), initial('Zara', 'Z')],
      timeAgo: '21m ago',
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
      updatedAgo: 'a day ago',
    },
    {
      id: 'churn',
      name: 'Churn',
      type: 'Dashboard',
      visibility: 'Everyone',
      updatedAgo: 'a day ago',
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
