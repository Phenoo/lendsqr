import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'

const UserPage = ({user}) => {


    return (
        <>
            <Head>
                <title>Lendsqr User Profile </title>
            </Head>
        <Layout>
            { user &&
                <div className='user'>
                    <section>
                       <Link href='/'>
                            <button className='btn-back'>
                                <BsArrowLeft />
                                back to users
                            </button>
                       </Link>
 
                        <div className="space-between">
                            <h4 className="headline">
                                user details
                            </h4>
                            <div className='flex'>
                                <button className='user-btn blacklist'>blacklist user</button>
                                <button className='user-btn activate '>activate user </button>
                            </div>
                        </div>
                        <div className="basic-info-container">
                            <div className="basic-info">
                                <div className="image">                                    
                                    <Image src={user.profile.avatar && user.profile.avatar} alt={user.userName} width={50} height={50} />
                                </div>
                                <div className="name">
                                    <h4>{user.profile.firstName} {user.profile.lastName}</h4>
                                    <h6 className='light'>{user.userName}</h6>
                                </div>
                                <div className="rating">
                                    <h6>
                                        user tier
                                    </h6>
                                    <div className="flex">
                                        <FaStar color='orange' />
                                        <AiOutlineStar color='orange' />
                                        <AiOutlineStar color='orange' />
                                    </div>
                                </div>
                                <div className="balance">
                                    <h4>{user.profile.currency} {user.accountBalance}</h4>
                                    <h6 className='light'>{user.accountNumber} / {user.orgName}</h6>
                                </div>
                            </div>
                            <div className="btn-container">
                                <button className='active'>General Details</button>
                                <button>Documents</button>
                                <button>Bank Details</button>
                                <button>Loans</button>
                                <button>Savings</button>
                                <button>App and System</button>
                            </div>

                        </div>
                        <div className='detail'>   
                                <div className="detail-container">
                                    <h4 className="tophead">personal information</h4>
                                    <div className="detail-box">
                                        <div className="detail-item">
                                            <h6>full name</h6>
                                            <h4>{user.profile.firstName} {user.profile.lastName}</h4>
                                        </div>
                                        <div className="detail-item">
                                            <h6>phone number</h6>
                                            <h4>{user.phoneNumber.substring(0, 15)}</h4>
                                        </div>
                                        <div className="detail-item">
                                            <h6>email address</h6>
                                            <h4 className='email'>{user.email}</h4>
                                        </div>
                                        <div className="detail-item">
                                            <h6>bvn</h6>
                                            <h4>{user.profile.bvn}</h4>
                                        </div>
                                        <div className="detail-item">
                                            <h6>gender</h6>
                                            <h4>{user.profile.gender}</h4>
                                        </div>
                                        <div className="detail-item">
                                            <h6>martial status</h6>
                                            <h4>{user.accountBalance >= 200 ? 'Married' : 'Single'}</h4>

                                        </div>
                                        <div className="detail-item">
                                            <h6>children</h6>
                                            <h4>{user.accountBalance >= 300 ? '4' : 'None'}</h4>
                                        </div>
                                        <div className="detail-item">
                                            <h6>type of residence</h6>
                                            <h4></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="detail-container">
                                    <h4 className="tophead">education and employment</h4>
                                    <div className="detail-box">
                                        <div className="detail-item">
                                            <h6>level of education</h6>
                                            <h4>{user.education.level}</h4>
                                        </div>
                                        <div className="detail-item">
                                            <h6>employment status</h6>
                                            <h4>{!user.education.employmenStatus ? 'Self-employed' : ''} {user.education.employmenStatus}</h4>
                                        </div>
                                        <div className="detail-item">
                                            <h6>sector of employment</h6>
                                            <h4>{user.education.sector}</h4>
                                        </div>
                                        <div className="detail-item">
                                            <h6>Duration of employment</h6>
                                            <h4>{user.education.duration}</h4>
                                        </div>
                                        <div className="detail-item">
                                            <h6>office email</h6>
                                            <h4 className='email'>{user.education.officeEmail}</h4>
                                        </div>
                                        <div className="detail-item">
                                            <h6> Monthly income</h6>
                                            <h4>{user.education.monthlyIncome[0]} - {user.education.monthlyIncome[1]}
                                            </h4>
                                        </div>
                                        <div className="detail-item">
                                            <h6>loan repayment</h6>
                                            <h4>{!user.education.loanPayment ? 'Soon' : ''}{user.education.loanPayment}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="detail-container">
                                    <h4 className="tophead">Socials</h4>
                                    <div className="detail-box">
                                        <div className="detail-item">
                                            <h6>Twitter</h6>
                                            <h4>{user.socials.twitter}</h4>
                                        </div>
                                        <div className="detail-item">
                                            <h6>Facebook</h6>
                                            <h4>{user.socials.facebook}</h4>
                                        </div>
                                        <div className="detail-item">
                                            <h6>Instagram</h6>
                                            <h4>{user.socials.instagram}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="detail-container">
                                    <h4 className="tophead">Guarantor</h4>
                                    <div className="detail-box">
                                        <div className="detail-item">
                                            <h6>full Name</h6>
                                            <h4>{user.guarantor.firstName} {user.guarantor.lastName} </h4>
                                        </div>
                                        <div className="detail-item">
                                            <h6>Phone Number</h6>
                                            <h4>{user.guarantor.phoneNumber}</h4>
                                        </div>
                                        <div className="detail-item">
                                            <h6>Address</h6>
                                            <h4 className=''>{user.guarantor.address}</h4>
                                        </div>
                                        <div className="detail-item">
                                            <h6>Relationship</h6>
                                            <h4>{user.guarantor.gender === 'male' ? 'Brother' : 'Sister'}</h4>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </section>
                </div>
            }

            
        </Layout>
        </>
  )
}

export default UserPage

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
    const posts = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: { id: post.id },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }

export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${params.id}`)
    const user = await res.json()
  
    // Pass post data to the page via props
    return { props: { user } }
  }
  