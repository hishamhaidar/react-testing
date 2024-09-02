import { render ,screen, within } from "@testing-library/react";
import UserList from "../UserList";

const renderComponent = () =>{
    const usersMock = [
        {name:'h',email:'s'},
        {name:'hd',email:'ss'},
    ]
    render(<UserList users={usersMock}/>)
    return {usersMock};
}

test('render one row per user',async () => {
renderComponent()
const rows = within(screen.getByTestId('users')).getAllByRole('row'); // NOT best idea always
// const {container} =render(<UserList users={usersMock}/>)
// // eslint-disable-next-line
// const rows = container.querySelectorAll('tbody tr')

expect(rows).toHaveLength(2)

})

test('rendering users',async () => {
    const {usersMock} = renderComponent();

    for (let user of usersMock){
        const name =  screen.getByRole('cell' , {name : user.name})
        const email = screen.getByRole('cell' , {name : user.email})

        expect(name).toBeInTheDocument()
        expect(email).toBeInTheDocument()
    }})