#include <iostream> 
#include <bits/stdc++.h> 
using namespace std;

int main(){
    int tcs;
    cin>>tcs;
    
    while(tcs--){
        long long n,k,ans=0;
        cin>>n;
        cin>>k;

        while(n>0 && k>1){
            long long power = 1;
            while(power<=n/k){
                power = power*k;
            }

            ans += n/power;
            n =  n%power;
        }

        if(k==1) ans = n;
        cout<<ans<<endl;
    }
    return 0;
}