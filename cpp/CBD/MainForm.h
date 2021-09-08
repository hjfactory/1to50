//---------------------------------------------------------------------------

#ifndef MainFormH
#define MainFormH
//---------------------------------------------------------------------------
#include <System.Classes.hpp>
#include <FMX.Controls.hpp>
#include <FMX.Forms.hpp>
#include <FMX.TabControl.hpp>
#include <FMX.Types.hpp>
#include <FMX.Controls.Presentation.hpp>
#include <FMX.Layouts.hpp>
#include <FMX.StdCtrls.hpp>
#include <FMX.Objects.hpp>
#include <FMX.ActnList.hpp>
#include <System.Actions.hpp>
//---------------------------------------------------------------------------
#include <time.h>
#include <FMX.Effects.hpp>
#include <FMX.Ani.hpp>
//---------------------------------------------------------------------------
class TfrmMain : public TForm
{
__published:	// IDE-managed Components
	TTabControl *TabControl;
	TTabItem *tabStart;
	TTabItem *tabGame;
	TLayout *Layout1;
	TCornerButton *btnStart;
	TRectangle *Rectangle1;
	TActionList *ActionList1;
	TChangeTabAction *ChangeTabAction;
	TRectangle *Rectangle2;
	TGridLayout *GridLayout;
	TLayout *lytGameTop;
	TText *txtRunTime;
	TTimer *Timer;
	TButton *btnNum;
	TStyleBook *StyleBook1;
	TButton *btnCancelGame;
	TTabItem *tabFinish;
	TRectangle *S;
	TRoundRect *RoundRect1;
	TText *Text1;
	TText *txtScore;
	TShadowEffect *ShadowEffect1;
	TButton *btnRestart;
	TLayout *lytBoard;
	TFloatAnimation *FloatAnimation1;
	void __fastcall FormCreate(TObject *Sender);
	void __fastcall btnStartClick(TObject *Sender);
	void __fastcall btnNumClick(TObject *Sender);
	void __fastcall TimerTimer(TObject *Sender);
	void __fastcall btnRestartClick(TObject *Sender);
	void __fastcall btnCancelGameClick(TObject *Sender);
	void __fastcall lytBoardResize(TObject *Sender);
private:	// User declarations
    clock_t FStartTime; // Stopwatch

    const int kMaximumNum = 50;
	int FCurrentNum;
	int FDisplayNum;
    long double FDuration;

	void __fastcall InitGame();
	void __fastcall StartGame();
	void __fastcall CancelGame();
	void __fastcall CompleteGame();

	void __fastcall ShowGamePane();
	void __fastcall ShowStartPane();
	void __fastcall ShowFinishPane();

    void __fastcall test();

    void __fastcall GenerateNumButtons();
public:		// User declarations
	__fastcall TfrmMain(TComponent* Owner);
};
//---------------------------------------------------------------------------
extern PACKAGE TfrmMain *frmMain;
//---------------------------------------------------------------------------
#endif
