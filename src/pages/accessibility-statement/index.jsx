import PublicView from '@/components/HOC/PublicView'
import { createMarkup } from '@/helpers/functions'
import PublicService from '@/services/PublicService'
import Head from 'next/head'
import React from 'react'

const AccessibilityStatement = ({data}) => {
  return (
    <main>
        <Head>
            <title>Accessibility Statement</title>
        </Head>
    <section className="py-4">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb breadcrumb-dots my-0 py-0">
                            <li className="breadcrumb-item"><a href="index.php">Home</a></li>
                            <li className="breadcrumb-item">Company</li>
                            <li className="breadcrumb-item">Accessibility Statement</li>
                        </ol>
                    </nav>
                    <h4 className="fw-normal mt-3">Accessibility Statement</h4>
                </div>
            </div>
        </div>
    </section>
    <section className="pt-0">
        <div className="container" dangerouslySetInnerHTML={createMarkup(data.description)} />
    </section>
</main>
  )
}

export default PublicView(AccessibilityStatement)


export async function getServerSideProps(context) {
    const { params, query } = context;
    
    
    const payload = {
      slug: "accessibility-statement",
    }
    const res = await PublicService.pageDetails(payload);
   
    console.log(res.data.sinData);
    
   
  
    return {
        props: {
          data:res.data.sinData,
        },
    };
  }