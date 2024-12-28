%% main
% 主程序
% 清除内存
clc;
clear;

% 待读取的文件
filename = "D:\TempFiles\Downloads\附魔系统\附魔战力.xlsx";

% 读取数据
powerTotal = readmatrix(filename, 'Sheet', 'Sheet1', 'Range', 'B3:B6');  % powerTotal (rows*1)
entryName = readcell(filename, 'Sheet', 'Sheet1', 'Range', 'C2:AC2');  % entryName (1*columns)
entryValue = readmatrix(filename, 'Sheet', 'Sheet1', 'Range', 'C3:AC6');  % entryValue (rows*columns)

% 处理缺失数据：

% 处理缺失数据：
powerTotal(isnan(powerTotal)) = 0;
entryValue(isnan(entryValue)) = 0;

% 求解 entryPower（线性方程组）
entryPower = entryValue \ powerTotal;

% 显示结果
entryAmount = length(entryPower);
for index = 1:entryAmount
    fprintf('{%s: %.2f}\n', entryName{index}, entryPower(index));
end



% %% test
% % 测试
% % 清除内存
% clc;
% clear;
% 
% % 待读取的文件
% filename = 'data.xlsx';
% 
% % % 读取数据
% powerTotal = readmatrix(filename, 'Sheet', 'Sheet1', 'Range', 'B3:B4');  % powerTotal (rows*1)
% entryName = readcell(filename, 'Sheet', 'Sheet1', 'Range', 'C2:D2');  % entryName (1*columns)
% entryValue = readmatrix(filename, 'Sheet', 'Sheet1', 'Range', 'C3:D4');  % entryValue (rows*columns)
% 
% % 处理缺失数据：
% powerTotal(isnan(powerTotal)) = 0;
% entryValue(isnan(entryValue)) = 0;
% 
% % 求解 entryPower（线性方程组）
% entryPower = entryValue \ powerTotal;
% 
% % 显示结果
% entryAmount = length(entryPower);
% for index = 1:entryAmount
%     fprintf('{%s: %.2f}\n', entryName{index}, entryPower(index));
% end