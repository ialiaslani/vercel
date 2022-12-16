<template>
        <footer class="flex items-start justify-between p-14 mas-w-6xl mx-auto bg-slate-300 mt-14">
                <HeaderIcon />
                <div v-for="l in lists" :key="l.length">
                        <ul>
                                <li v-for="(item, i) in l" :key="i" :class="i === 0 ? 'font-medium' : ''">{{ item }}</li>
                        </ul>
                </div>
        </footer>
</template>

<script setup>
const list1 = [
        'Frameworks',
        'Next.js',
        'Create React App',
        'Svelte',
        'Nuxt',
        'Gatsby',
        'Vue',
        'Angular',
        'More Frameworks',
]

const list2 = [
        'Resources',
        'Documentation',
        'Experts',
        'Customers',
        'Guides',
        'Help',
        'API Reference',
        'OSS',
        'Command-Line',
        'Integrations',
]
const list3 = [
        'Company',
        'Home',
        'Blog',
        'Changelog',
        'About',
        'Careers',
        'Pricing',
        'Enterprise',
        'Security',
        'Next.js Conf',
        'Partners',
        'Contact Us',
]
const list4 = [
        'Legal',
        'Privacy Policy',
        'Terms of Service',
        'Trademark Policy',
        'Inactivity Policy',
        'DMCA Policy',
        'Support Terms',
        'DPA',
        'SLA',
        'Sub-processors',
        'Cookie Preferences',
        'Event Terms and Conditions',
        'Job Applicant Privacy Notice',
]

const lists = [
        list1,
        list2,
        list3,
        list4,
]
</script>
