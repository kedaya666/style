/**
 * Created by myj on 16-12-8.
 */
var cartController=function($scope){
    $scope.cart=[{
        id:1,
        name:'苹果7',
        buycount:2,
        price:5000
    },
        {
            id:2,
            name:'苹果6',
            buycount:1,
            price:2000
        },
        {
            id:3,
            name:'苹果5',
            buycount:1,
            price:2000
        },
        {
            id:4,
            name:'苹果4',
            buycount:2,
            price:5000
        }
    ];
    /*购买总价*/
    $scope.totalPrice=function(){
        var total=0;
        angular.forEach($scope.cart,function(item){
            total+=item.buycount*item.price;//danjia*数量
        });
        return total;
    };
    /*购买总数1*/
    $scope.buycountsum=function(){
        var sum=0;
        angular.forEach($scope.cart,function(item)
        {
            sum+=item.buycount;
        });
        return sum;
    };
    /*从购物车内移除商品*/
    $scope.remove= function (id) {
        //console.log(id);
        var index1=-1;
        angular.forEach($scope.cart,function(item,index){
            //console.log(index);
            //返回索引-根据编号匹配成功的
            if(item.id===id){
                index1=index;
            }
        });
        if(index1!==-1){
            $scope.cart.splice(index1,1);
        }
    };
     /*购物车*/
    var  finfIndex=function(id){
        var index1=-1;
        angular.forEach($scope.cart,function(item,index){
            if(item.id===id){
                index1=index;
            }
        });
        return index1;
    };
    //加+
     $scope.add=function(id){
         var index=finfIndex(id);//第一步先找到当前索引
         if(index!==-1){
             ++$scope.cart[index].buycount;
         }
     };
    //减-
    $scope.reduce=function(id){
        var index=finfIndex(id);
        if(index!==-1){
            if($scope.cart[index].buycount>1){
                --$scope.cart[index].buycount;
            }
            else{
                var message=confirm("是否从购物车内移除该商品");//给出提示信息
                if(message){
                    $scope.remove(id);//调用移除方法
                }
            }
        }
    };
    /*过滤器案例*/
    $scope.orderType="id";
    $scope.order="-";
    //参数type：要排序的字段
    $scope.changeOrder=function(type){
        $scope.orderType=type;
        if($scope.order===""){
            $scope.order="-"
        }
        else{
            $scope.order="";
        }
    };
//下单日期
    $scope.date = new Date();




};
