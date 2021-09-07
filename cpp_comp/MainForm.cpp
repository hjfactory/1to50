//---------------------------------------------------------------------------

#include <fmx.h>
#pragma hdrstop

#include "MainForm.h"

#include <array>
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

void __fastcall TfrmMain::CornerButton1Click(TObject *Sender)
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

void __fastcall TfrmMain::InitGame()
{
    GenerateNumButtons();
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


	for(int i=0; i < nums.size(); i++){
		TButton *button = new TButton(this);
		button->Text = nums[i];
		button->OnClick = btnNum1Click;
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

}


void __fastcall TfrmMain::btnNum1Click(TObject *Sender)
{
	ShowMessage("123");


}
//---------------------------------------------------------------------------


void __fastcall TfrmMain::TimerTimer(TObject *Sender)
{
	clock_t  NowTime = clock();

	long double duration = double(NowTime - FStartTime) / 1000;

	txtRunTime->Text = Format("%0.3f", ARRAYOFCONST((duration)));
}
//---------------------------------------------------------------------------

