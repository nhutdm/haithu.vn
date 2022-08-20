import { ReactNode } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface ContainerProps {
  children: ReactNode
}

function Container(props: ContainerProps) {
  const { children } = props
  const router = useRouter()
  const meta = {
    title: 'Hai Thư – Dịch vụ tang lễ trọn gói tại Đơn Dương, Lâm Đồng',
    description:
      'Chuyên cung cấp dịch vụ mai táng trọn gói đảm bảo chất lượng và sự hài lòng của khách hàng. Phục vụ và hỗ trợ tận tâm 24/24 tại Đơn Dương, Lâm Đồng.',
  }

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <link rel="canonical" href={`https://haithu.vn${router.asPath}`} />
      </Head>
      <main>{children}</main>
    </div>
  )
}

export default Container
