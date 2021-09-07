//---------------------------------------------------------------------------

#include <fmx.h>
#pragma hdrstop

#include "MainForm.h"

#include <array>
#include <iostream>     // std::cout
#include <algorithm>    // std::shuffle
#include <array>        // std::array
#include <random>       // std::default_random_engine
#include <chrono>       // std::chrono::system_clock

#include <System.DateUtils.hpp>
//#include <stdio.h>
#include <System.SysUtils.hpp>
//---------------------------------------------------------------------------
#pragma package(smart_init)
#pragma resource "*.fmx"
TfrmMain *frmMain;
//---------------------------------------------------------------------------
__fastcall TfrmMain::TfrmMain(TComponent* Owner)
	: TForm(Owner)
{
}
//---------------------------------------------------------------------------
void __fastcall TfrmMain::FormCreate(TObject *Sender)
{
	TabControl->TabPosition = TTabPosition::None;
	TabControl->TabIndex = 0;

	Timer->Enabled = False;
}

//---------------------------------------------------------------------------

void __fastcall TfrmMain::btnStartClick(TObject *Sender)
{
	StartGame();
}
//---------------------------------------------------------------------------

void __fastcall TfrmMain::StartGame()
{
	InitGame();
	ShowGamePane();

	FStartTime = clock();
	Timer->Enabled = True;
}

void __fastcall TfrmMain::CancelGame()
{
    Timer->Enabled = False;
	ShowStartPane();
}

void __fastcall TfrmMain::CompleteGame()
{
	Timer->Enabled = False;
	ShowFinishPane();

	txtScore->Text = Format("%0.3f", ARRAYOFCONST((FDuration / 1000)));;
}


void __fastcall TfrmMain::InitGame()
{
	GenerateNumButtons();

    FDuration = 0;

	FCurrentNum = 1;
    FDisplayNum = 26;
}

void __fastcall TfrmMain::GenerateNumButtons()
{
	for(int i=GridLayout->ChildrenCount-1; i>=0; i--){
		delete GridLayout->Children->Items[i];
	}

	std::array<int, 25> nums;
	for(int i=1; i<=nums.size(); i++){
        nums[i-1] = i;
	}
    // ÆÐ ¼¯±â
	unsigned seed = std::chrono::system_clock::now().time_since_epoch().count();
	shuffle(nums.begin(), nums.end(), std::default_random_engine(seed));

	for(int i=0; i < nums.size(); i++){
		TButton *button = new TButton(this);
		button->Text = nums[i];
		button->OnClick = btnNumClick;
		button->Parent = GridLayout;
        button->StyleLookup = "NumButton";
	}
}

void __fastcall TfrmMain::ShowGamePane()
{
	ChangeTabAction->Tab = tabGame;
	ChangeTabAction->ExecuteTarget(NULL);
}

void __fastcall TfrmMain::ShowStartPane()
{
	ChangeTabAction->Tab = tabStart;
	ChangeTabAction->ExecuteTarget(NULL);
}

void __fastcall TfrmMain::ShowFinishPane()
{
	ChangeTabAction->Tab = tabFinish;
	ChangeTabAction->ExecuteTarget(NULL);
}


void __fastcall TfrmMain::btnNumClick(TObject *Sender)
{
	TButton* btn = dynamic_cast<TButton*>(Sender);
	int num = StrToIntDef(btn->Text, 0);

	if(num == FCurrentNum){
		FCurrentNum++;

		if(FDisplayNum > kMaximumNum){
			btn->Text = "";
		}
		else {
			btn->Text = FDisplayNum;
			FDisplayNum++;
		}

		if(num == kMaximumNum){
			CompleteGame();
		}
	}
}
//---------------------------------------------------------------------------


void __fastcall TfrmMain::TimerTimer(TObject *Sender)
{
	clock_t  NowTime = clock();

	FDuration = double(NowTime - FStartTime);

	txtRunTime->Text = Format("%0.3f", ARRAYOFCONST((FDuration / 1000)));
}
//---------------------------------------------------------------------------

void __fastcall TfrmMain::btnRestartClick(TObject *Sender)
{
	StartGame();
}
//---------------------------------------------------------------------------


void __fastcall TfrmMain::btnCancelGameClick(TObject *Sender)
{
	CancelGame();
}
//---------------------------------------------------------------------------

