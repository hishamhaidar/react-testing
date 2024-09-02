import {render , screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import UserForm from '../UserForm'

test('User Form show 2 inputs and a 1 button',async()=>{

    render(<UserForm />)

    const inputs = await screen.findAllByRole('textbox')
    const button =  screen.getByRole('button')
    expect(inputs).toHaveLength(2)
    expect(button).toBeInTheDocument();
})

test('User Form functionality',async()=>{
    const OnUserAddmock = jest.fn()

    render(<UserForm onUserAdd={OnUserAddmock}/>)

    // const [name,email] = await screen.findAllByRole('textbox');
    const name =  screen.getByRole('textbox',{name : /Enter Name/i
        })
    const email =  screen.getByRole('textbox',{name : /Enter Email/i
        })
    user.type(name,'h');
    user.type(email,'h@h.test');
    const submit =  screen.getByRole('button');
    user.click(submit);
    expect(OnUserAddmock).toHaveBeenCalled()
    expect(OnUserAddmock).toHaveBeenCalledWith({name:'h',email:'h@h.test'})

})

test('form field should reset after submit',async()=>{
render(<UserForm onUserAdd={()=>{}}/>)
const nameInp =  screen.getByRole('textbox',{name : /Enter Name/i
})
const emailInp =  screen.getByRole('textbox',{name : /Enter Email/i
})
const submit =  screen.getByRole('button');
user.type(nameInp,'h');
user.type(emailInp,'h@h.test');

await user.click(submit)
expect(nameInp).toHaveValue('')
expect(emailInp).toHaveValue('')

})