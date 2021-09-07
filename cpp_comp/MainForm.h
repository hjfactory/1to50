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
//---------------------------------------------------------------------------
class TfrmMain : public TForm
{
__published:	// IDE-managed Components
	TTabControl *TabControl;
	TTabItem *tabStart;
	TTabItem *tabGame;
	TLayout *Layout1;
	TCornerButton *CornerButton1;
	TRectangle *Rectangle1;
	TActionList *ActionList1;
	TChangeTabAction *ChangeTabAction;
	TRectangle *Rectangle2;
	TGridLayout *GridLayout;
	TLayout *Layout2;
	TText *txtRunTime;
	TTimer *Timer;
	TButton *btnNum1;
	TStyleBook *StyleBook1;
	TButton *Button1;
	TTabItem *tabFinish;
	void __fastcall FormCreate(TObject *Sender);
	void __fastcall CornerButton1Click(TObject *Sender);
	void __fastcall btnNum1Click(TObject *Sender);
	void __fastcall TimerTimer(TObject *Sender);
private:	// User declarations
    clock_t FStartTime;
	void __fastcall StartGame();
	void __fastcall ShowGamePane();
    void __fastcall ShowStartPane();
	void __fastcall InitGame();

    void __fastcall test();

    void __fastcall GenerateNumButtons();
public:		// User declarations
	__fastcall TfrmMain(TComponent* Owner);
};
//---------------------------------------------------------------------------
extern PACKAGE TfrmMain *frmMain;
//---------------------------------------------------------------------------
#endif
