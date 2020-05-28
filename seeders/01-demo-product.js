'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    let data = [
      //cata 1: 
    { name:"Bóng Đèn",
    price:120,
    imagepath:'/img/product/product3.png',
    thumbnail:'/img/product/product3.png',
    availability:"In Stock",
    description: "Bóng đèn này sáng tỏ rất tốt và còn tiết kiệm điện nữa ahihi",
    categoryID:1 },
    { name:"Xe Hai Đầu Rồng",
    price:10000,
    imagepath:'/img/product/product6.png',
    thumbnail:'/img/product/product6.png',
    availability:"In Stock",
    description: "Xe chạy nhanh như tốc độ người yêu cũ lật mặt",
    categoryID:1 },
    { name:"Loa Chảo",
    price:10,
    imagepath:'/img/product/product7.png',
    thumbnail:'/img/product/product7.png',
    availability:"In Stock",
    description: "Loa gì kì cục nhà quê như tôi lần đầu mới thấy mua đi bạn ei",
    categoryID:1 },
    { name:"Cặp Táp",
    price:99,
    imagepath:'/img/product/product5.png',
    thumbnail:'/img/product/product5.png',
    availability:"Out of Stock",
    description: "Cặp hàng chợ tây thạnh đeo hai hôm vẫn đeo được hôm thứ ba ",
    categoryID:1 },
    // end cata 1
    // cata 2://///////////////////////////////////////////////////////////
    { name:"Sữa Rửa mặt",
    price:120,
    imagepath:'/img/product/product2.png',
    thumbnail:'/img/product/product2.png',
    availability:"In Stock",
    description: "Rửa đi cái mặt thứ 2 của bạn",
    categoryID:2 },
    { name:"Gương thần",
    price:10000,
    imagepath:'/img/product/product8.png',
    thumbnail:'/img/product/product8.png',
    availability:"In Stock",
    description: "Không biết cái này là cái gì luôn mà chắc là cái sạc.",
    categoryID:2 },
    { name:"Cái Cặp",
    price:10,
    imagepath:'/img/product/product5.png',
    thumbnail:'/img/product/product5.png',
    availability:"In Stock",
    description: "Cặp cũng được được",
    categoryID:2 },
    { name:"Đồng hồ",
    price:99,
    imagepath:'/img/product/product1.png',
    thumbnail:'/img/product/product1.png',
    availability:"Out of Stock",
    description: "Đeo cho vui thôi chứ xem bằng điện thoại ko à ",
    categoryID:2 },
    ////// end cate 2
    ////// cate 3/////
    { name:"Cái mắc áo",
    price:120,
    imagepath:'/img/blog/blog2.png',
    thumbnail:' /img/blog/blog2.png',
    availability:"In Stock",
    description: "Treo lên cho nó thẳng",
    categoryID:3 },
    { name:"Tủ lộ thiên",
    price:10000,
    imagepath:'/img/blog/blog1.png',
    thumbnail:' /img/blog/blog1.png',
    availability:"In Stock",
    description: "Treo cho sang nhà sang cửa",
    categoryID:3 },
    { name:"Túi Giấy",
    price:10,
    imagepath:'/img/blog/blog3.png',
    thumbnail:'/img/blog/blog3.png',
    availability:"Out of Stock",
    description: "Sài mau hư nhưng mà tiện",
    categoryID:3 },
    { name:"Đồng hồ",
    price:99,
    imagepath:'/img/product/product1.png',
    thumbnail:'/img/product/product1.png',
    availability:"Out of Stock",
    description: "Đeo cho vui thôi chứ xem bằng điện thoại ko à ",
    categoryID:3 },
    //// end cate 3
    //// open cate 4
    { name:"Đồng hồ",
    price:99,
    imagepath:'/img/product/product1.png',
    thumbnail:'/img/product/product1.png',
    availability:"Out of Stock",
    description: "Đeo cho vui thôi chứ xem bằng điện thoại ko à ",
    categoryID:4 },
    
    { name:"Bóng Đèn",
    price:120,
    imagepath:'/img/product/product3.png',
    thumbnail:'/img/product/product3.png',
    availability:"In Stock",
    description: "Bóng đèn này sáng tỏ rất tốt và còn tiết kiệm điện nữa ahihi",
    categoryID:4 },

    { name:"Loa Chảo",
    price:10,
    imagepath:'/img/product/product7.png',
    thumbnail:'/img/product/product7.png',
    availability:"In Stock",
    description: "Loa gì kì cục nhà quê như tôi lần đầu mới thấy mua đi bạn ei",
    categoryID:4 },

    { name:"Gương thần",
    price:10000,
    imagepath:'/img/product/product8.png',
    thumbnail:'/img/product/product8.png',
    availability:"In Stock",
    description: "Không biết cái này là cái gì luôn mà chắc là cái sạc.",
    categoryID:4 },

    
    ];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
    return queryInterface.bulkInsert('Products', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
 
  }
};
 