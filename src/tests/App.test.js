import {render , screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import App from '../App'


test('Can receive a new user and show it on a list',async ()=>{
    render(<App />)
    const name =  screen.getByRole('textbox',{name : /Enter Name/i
    })
    const email =  screen.getByRole('textbox',{name : /Enter Email/i
    })
    user.click(name)
    user.keyboard('h')
    user.click(email)
    user.keyboard('h@h.com')
    const submit =  screen.getByRole('button');
 await user.click(submit);
    const nameCheck =  screen.getByRole('cell' , {name : 'h'})
    const emailCheck =  screen.getByRole('cell' , {name : 'h@h.com'})

    expect(nameCheck).toBeInTheDocument()
    expect(emailCheck).toBeInTheDocument()
})