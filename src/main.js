import Alpine from 'alpinejs'
import './style.css'

document.addEventListener('alpine:init', () => {
    Alpine.data('businessSystem', () => ({
        opportunities: [
            {
                id: '00031',
                status: '開發',
                customer: '萬里雲互聯',
                agent: '',
                name: 'Solution Day',
                product: '一般專案',
                rate: '70%',
                amount: 600000,
                department: 'BN廣告',
                manager: '陳景韜',
                updateTime: '2024-11-27 18:08:03'
            },
            {
                id: '00032',
                status: '提案',
                customer: '台灣三星電子',
                agent: '',
                name: '數位內容',
                product: '一般專案',
                rate: '70%',
                amount: 400000,
                department: 'BN廣告',
                manager: '陳景韜',
                updateTime: '2024-11-27 18:08:03'
            },
            {
                id: '00033',
                status: '回覆',
                customer: '數位發展部',
                agent: '資訊聯合會',
                name: '數位攻項計畫',
                product: '一般專案',
                rate: '70%',
                amount: 600000,
                department: '專企',
                manager: '溫偉伶',
                updateTime: '2024-11-27 18:08:03'
            },
            {
                id: '00034',
                status: '合約',
                customer: '財團法人新北',
                agent: '',
                name: '成果發表會報導',
                product: '一般專案',
                rate: '70%',
                amount: 200000,
                department: 'SD廣告',
                manager: '侯馨莉',
                updateTime: '2024-11-27 18:08:03'
            }
        ]
    }))
})

Alpine.start()