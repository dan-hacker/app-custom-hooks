# useForm Hook

Ejemplo de uso:

``` 
   const initForm = {
      name: '',
      id: 123
   }
   const [ formValues, handleInputChange, reset ] = useForm(initForm)
```

useForm() // recibe un objeto por defecto