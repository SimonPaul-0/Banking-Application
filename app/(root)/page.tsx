import HeaderBox from '@/components/HeaderBox'
import { RightSidebar } from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIN={ firstName:'Simon ', lastName:'JSM', email:'contact@jsmastery.pro'};

    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                  <HeaderBox
                  type="greeting"
                  title="Welcome "
                  user={loggedIN?.firstName || 'Guest'}
                  subtext="Access and manage your accounts and transactions more effectively than ever."
                  />

                  <TotalBalanceBox 
                  accounts={[]}
                  totalBanks={1}
                  totalCurrentBalance={1250.35}
                  />
                </header>  
                RECENT TRANSACTIONS
            </div>
            <RightSidebar
            user={loggedIN}
            transactions={[]}
            banks={[{}, {}]}/>
        </section>
    )
}

export default Home