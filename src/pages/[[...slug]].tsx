import dynamic from 'next/dynamic'
const Entry = dynamic(() => import('../routes'), { ssr: false })
export default Entry