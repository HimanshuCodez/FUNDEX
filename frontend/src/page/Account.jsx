import { 
  User, 
  Diamond, 
  CreditCard, 
  Banknote, 
  ArrowDownCircle, 
  ArrowUpCircle, 
  Users, 
  Gift,
  ChevronRight
} from 'lucide-react';

export default function FundexProfile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-700 via-amber-600 to-yellow-500 p-4">
      <div className="max-w-sm mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-6 text-center relative">
          <div className="w-16 h-16 bg-white rounded-full mx-auto mb-3 flex items-center justify-center">
            <User className="w-8 h-8 text-amber-600" />
          </div>
          <h2 className="text-white text-lg font-semibold">Fundex</h2>
          <p className="text-white/80 text-sm">ID: FX23111345</p>
        </div>

        {/* VIP Section */}
        <div className="mx-6 -mt-3 mb-6">
          <div className="bg-gradient-to-r from-yellow-400 to-amber-400 rounded-2xl p-4 relative overflow-hidden">
            <div className="absolute top-2 right-2">
              <Diamond className="w-8 h-8 text-yellow-600 opacity-20" />
            </div>
            <div className="flex items-center mb-3">
              <Diamond className="w-4 h-4 text-amber-700 mr-2" />
              <span className="bg-amber-700 text-white px-3 py-1 rounded-full text-xs font-bold">
                VIP
              </span>
            </div>
            <p className="text-amber-800 text-xs mb-2">CURRENT PROGRESS 0.00 / 550.00</p>
            <div className="bg-amber-700/20 rounded-full h-2">
              <div className="bg-amber-700 h-2 rounded-full w-0"></div>
            </div>
          </div>
        </div>

        {/* Account Balance */}
        <div className="mx-6 mb-6">
          <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Account Balance</p>
              <p className="text-2xl font-bold text-gray-800">0.00</p>
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold text-sm transition-colors">
              RECHARGE
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mx-6 mb-6 grid grid-cols-3 gap-4">
          <div className="bg-yellow-50 rounded-2xl p-4 text-center">
            <div className="w-12 h-12 bg-yellow-200 rounded-xl mx-auto mb-2 flex items-center justify-center">
              <Banknote className="w-6 h-6 text-yellow-600" />
            </div>
            <p className="text-gray-700 font-medium text-sm">Withdrawal</p>
            <p className="text-gray-500 text-xs">0.50</p>
          </div>
          
          <div className="bg-purple-50 rounded-2xl p-4 text-center">
            <div className="w-12 h-12 bg-purple-200 rounded-xl mx-auto mb-2 flex items-center justify-center">
              <Diamond className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-gray-700 font-medium text-sm">VIP</p>
          </div>
          
          <div className="bg-blue-50 rounded-2xl p-4 text-center">
            <div className="w-12 h-12 bg-blue-200 rounded-xl mx-auto mb-2 flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-gray-700 font-medium text-sm">Bank Card</p>
          </div>
        </div>

        {/* Fund Entry Section */}
        <div className="mx-6 mb-6">
          <h3 className="text-gray-800 font-semibold mb-4">FUND ENTRY</h3>
          
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-yellow-200 rounded-xl flex items-center justify-center mr-3">
                  <ArrowDownCircle className="w-5 h-5 text-yellow-600" />
                </div>
                <span className="text-gray-700 font-medium">Withdrawal Record</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-200 rounded-xl flex items-center justify-center mr-3">
                  <ArrowUpCircle className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">Recharge Record</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-200 rounded-xl flex items-center justify-center mr-3">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">My Referrals Links</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-200 rounded-xl flex items-center justify-center mr-3">
                  <Gift className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-gray-700 font-medium">Referral Commissions</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}