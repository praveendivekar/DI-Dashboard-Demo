$(document).ready(function(){
    $('.admin-control').on('click', function(){
        console.log('admin button clicked' );
        window.location.href= ('html/admin-dashboard.html')
    });

    $('.user-control').on('click', function(){
        console.log('user button clicked' );
        window.location.href = ('html/user-dashboard.html')
    });
})