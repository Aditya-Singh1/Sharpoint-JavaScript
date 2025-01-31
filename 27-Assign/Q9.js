let product_Descriptions = [
'This new smartwatch is packed with features including heart rate monitoring, sleep tracking, and a long battery life.',
'Our latest smartphone has an ultra-fast processor, an incredible camera, and long-lasting battery life.',
'This ergonomic office chair is designed to provide comfort for long hours of sitting,with adjustable features.',
'The new gaming laptop features a high-resolution display, powerful graphics card, and fast processing power.',
'Eco-friendly water bottles made from recycled materials that keep your beverages hot or cold for hours.'
    ];

    let data=[];
   data= product_Descriptions.map(pd=>

    pd.length > 20 ? pd.substring(0,20)  + "view More.... " : pd )

  console.log(data)

    