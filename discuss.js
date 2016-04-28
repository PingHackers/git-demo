+ (void)homeMenuDataSuccess:(void(^)(HomeMenuData *homeMenuData))success failure:(void(^)(NSError *error))failure{

    
    NSString *urlStr = [NSString stringWithFormat:@"%@/api/App/GetHomeIndexCategory",INTEGRALURL];
    // GET方法
    [ECGOHttpTool GET:urlStr parameters:nil success:^(id result) {
        
       NSLog(@"%@",result);
        
        
        HomeMenuList *homeMenulist = [HomeMenuList objectWithKeyValues:result];
        
        if (success) {
            success(homeMenulist.data);
        }
        
        
    } failure:^(NSError *error) {
        
        if (failure) {
            failure(error);
        }
        
    }];


}

