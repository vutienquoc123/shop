let initialState = {
  list_item: [
    {
      image:'',
      total:'2',
      name:'ca chua',
      price:'5000',
      unit:'qua'
    },
    {
      image:'',
      total:'5',
      name:'dua hau',
      price:'10000',
      unit:'kg'
    }
  ],
  total_price : 70000,
  total_item: 7,
};


export default function Cart(state=initialState,action)
{
  switch (action.type) {
    default:
      return state;
  }
} 
